'use strict';

var fs = require('fs');

describe("homepage", function() {
      beforeEach(function() {
          browser.get('/');
      });

      it('should expect something', function() {
          var x = 1;
          expect(x).toEqual(x);
      });
  });

describe('Output the code coverage objects', function() {
  it('should output the coverage object.', function() {
    browser.driver.executeScript("return __coverage__;").then(function(val) {
      fs.writeFileSync("coverage/e2e/coverageE2E.json", JSON.stringify(val));
    });
  });
});
