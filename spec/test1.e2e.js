'use strict';

describe("homepage", function() {
    beforeEach(function() {
        browser.get('/');
    });

    it('should expect something', function() {
        //var el = document.querySelector("body");
        //var injector = angular.element(el).injector();
        //var currentStateName = injector.get('$state');
        //expect(currentStateName).toEqual("hello");

        var hello_link = $('[href*=hello]');  
        var about_link = $('[href*=about]');  
        hello_link.click();
        //expect(answer.getText()).toEqual("Chocolate!");
    });
});

