'use strict';

describe("homepage", function() {
    beforeEach(function() {
        browser.get('/', 10000);
    });

    it('should redirect to hello when clicking on hello link', function() {
        expect(browser.getCurrentUrl()).toMatch('/');
        var hello_link =  element(by.css('[ui-sref="hello"]'));
        var about_link =  element(by.css('[ui-sref="about"]'));
        hello_link.click();
        expect(browser.getCurrentUrl()).toMatch('/#!/hello$');
    });
});

