import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  name:     string;
  start:    number;
  end:      number;
  duration: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title      =  'Front-End Exam';
  taskInProg =  false;
  taskTime   =  0;
  name:         string;
  start:        number;
  end:          number;
  duration:     number;
  SI;
  
  newTask = {
    "name": "",
    "start": 0,
    "end": 0,
    "duration": 0
  };
  
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  constructor(private afs: AngularFirestore) {}
  
  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }
  
  addPost() {
    this.afs.collection('posts').add({'name': this.name, 'start': this.start, 'end': this.end, 'duration': this.duration});
  }
  
  startTask(nTask: string) {
    this.newTask = {
        "name": nTask,
        "start": Date.now(),
        "end": 0,
        "duration": 0
    }
    
    this.SI = setInterval(() => {
        this.taskTime = Date.now()-this.newTask.start;
     }, 1000);
     
    this.taskInProg = true;
  }
  
  addTask(nTask: HTMLInputElement) {
    this.newTask.end      = Date.now();
    this.newTask.duration = this.newTask.end - this.newTask.start;
    this.afs.collection('posts').add({'name': this.newTask.name, 'start': this.newTask.start, 'end': this.newTask.end, 'duration': this.newTask.duration}); 
    
    nTask.value = null;
    clearInterval(this.SI);
    this.taskTime = 0;
    this.taskInProg = false;
  }
}
