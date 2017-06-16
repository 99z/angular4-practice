import { FirstStepsPage } from './app.po';

describe('first-steps App', () => {
  let page: FirstStepsPage;

  beforeEach(() => {
    page = new FirstStepsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
