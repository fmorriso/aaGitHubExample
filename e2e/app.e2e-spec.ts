import { AaGitHubExamplePage } from './app.po';

describe('aa-git-hub-example App', () => {
  let page: AaGitHubExamplePage;

  beforeEach(() => {
    page = new AaGitHubExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
