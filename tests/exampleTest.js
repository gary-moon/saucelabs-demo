var expect = require('chai').expect;

describe('Simple test', function () {
  it('checks the title of the page', function () {
    return browser
      .url('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
      .getTitle()
      .then(function (title) {
        expect(title).to.equal('JavaScript | MDN');
      });
  });

  it('checks the title on our locally hosted page', function () {
    return browser
      .url('http://localhost:3000/index.html')
      .getTitle()
      .then(function (title) {
        expect(title).to.equal('Example');
      });
  });
});
