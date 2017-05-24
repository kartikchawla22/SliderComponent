import { SlidercompPage } from './app.po';

describe('slidercomp App', function() {
  let page: SlidercompPage;

  beforeEach(() => {
    page = new SlidercompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
