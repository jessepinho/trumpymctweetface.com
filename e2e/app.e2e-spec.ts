import { TrumpTweetsPage } from './app.po';

describe('trump-tweets App', () => {
  let page: TrumpTweetsPage;

  beforeEach(() => {
    page = new TrumpTweetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
