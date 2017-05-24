import { FirebasesamplesPage } from './app.po';

describe('firebasesamples App', () => {
  let page: FirebasesamplesPage;

  beforeEach(() => {
    page = new FirebasesamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
