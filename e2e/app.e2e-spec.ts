import { Practice05Page } from './app.po';

describe('practice05 App', () => {
  let page: Practice05Page;

  beforeEach(() => {
    page = new Practice05Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
