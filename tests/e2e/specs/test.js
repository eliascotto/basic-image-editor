// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  beforeEach: (browser) => browser.init(),

  'default e2e tests': browser => {
    browser
      .openHomepage()
      .waitForElementVisible('#app')
      .assert.elementPresent('.ImagePicker__uploadButton')
      .assert.attributeEquals('.Slider[name="brightness"]', 'disabled', 'true')
      .assert.attributeEquals('input.Input__element', 'disabled', 'true')
      .setValue('input[type="file"]', require('path').resolve(__dirname + '../../../../src/assets/top.png'))
      .pause(200)
      .assert.cssProperty('.Slider[name="brightness"]', 'background', 'rgba(0, 0, 0, 0) linear-gradient(to right, rgb(37, 169, 91) 0%, rgb(37, 169, 91) 50%, rgba(37, 169, 91, 0.25) 50%, rgba(37, 169, 91, 0.25) 100%) repeat scroll 0% 0% / auto padding-box border-box')
      .assert.attributeEquals('input.Input__element', 'value', 'top.png')
      .moveToElement('.Slider[name="brightness"]', 100, 0)
      .mouseButtonClick(0)
      .pause(500)
      .assert.containsText('.ImageSlider__guide', '-58')
  },
}
