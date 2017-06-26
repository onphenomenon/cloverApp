import { CLOVERAPPPage } from './app.po';

describe('clover-app App', () => {
  let page: CLOVERAPPPage;

  beforeEach(() => {
    page = new CLOVERAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
