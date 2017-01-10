import { IntergrateUiPage } from './app.po';

describe('intergrate-ui App', function() {
  let page: IntergrateUiPage;

  beforeEach(() => {
    page = new IntergrateUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
