import { VolunteerWebsitePage } from './app.po';

describe('volunteer-website App', () => {
  let page: VolunteerWebsitePage;

  beforeEach(() => {
    page = new VolunteerWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
