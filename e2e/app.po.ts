import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.sleep(3000);
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  getButtonText() {
    return element(by.css('app-root button')).getText();
  }
}
