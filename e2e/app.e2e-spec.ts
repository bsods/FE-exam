import { AppPage } from './app.po';

describe('cartwheel-exam App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Start Task button', () => {
    page.navigateTo();
    expect(page.getButtonText()).toEqual('Start Task');
  });
});
