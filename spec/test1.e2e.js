'use strict';

describe("homepage", function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get('/');
    });

    it('should redirect to hello when clicking on hello link', function() {
        expect(browser.getCurrentUrl()).toMatch('/');
        var hello_link = $('[href*=hello]');  
        var about_link = $('[href*=about]');  
        hello_link.click();
        expect(browser.getCurrentUrl()).toMatch('/#!/hello$');
    });
});

