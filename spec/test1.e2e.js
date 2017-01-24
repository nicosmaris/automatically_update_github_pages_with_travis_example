'use strict';

describe("homepage", function() {
    beforeEach(function() {
        browser.get('/', 10000);
    });

    it('should have a link', function () {
        var about_link = element(by.css('[ui-sref="about"]'));
        browser.wait(function() {
                return about_link.isPresent();
            }, timeToWaitInMilliseconds, 'no link with ui-sref about');
        expect(about_link.isPresent()).toBe(true);  
    });

});

