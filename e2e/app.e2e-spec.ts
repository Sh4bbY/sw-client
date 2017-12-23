import { AppPage } from './app.po';

describe('client App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the correct footer text.', () => {
    page.navigateTo();
    expect(page.getFooterText()).toEqual('I am a footer');
  });
});
