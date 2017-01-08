'use strict';

describe("homepage", function() {
    beforeEach(function() {
        browser.get('/');
    });

    it('should display h3 with text hello world! when clicking on hello link', function() {
        var hello_link = $('[href*=hello]');  
        var about_link = $('[href*=about]');  
        hello_link.click();
        var h3 = $scope.h3;
        var text = h3.getText()
        expect(text).toEqual("hello world!");
    });
});

