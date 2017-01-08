'use strict';

describe("homepage", function() {
    beforeEach(function() {
        browser.get('/');
    });

    it('should expect something', function() {
var currentStateName = browser.executeAsyncScript(function(callback) {
            var el = document.querySelector("html");  // ng-app is defined on html element in this case
            var injector = angular.element(el).injector();
            var service = injector.get('$state');

            callback(service.current.name);
        });

        expect(currentStateName).toEqual("hello");
          var hello_link = $('[href*=hello]');  
          var about_link = $('[href*=about]');  
          hello_link.click();
          //expect(answer.getText()).toEqual("Chocolate!");
    });
});

