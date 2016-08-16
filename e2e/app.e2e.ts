import { WebpippyPage } from './app.po';

describe('webpippy App', function() {
  let page: WebpippyPage;

  beforeEach(() => {
    page = new WebpippyPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('webpippy works!');
  });
});
