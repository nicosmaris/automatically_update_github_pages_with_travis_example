'use strict';

describe("homepage", function() {
    beforeEach(function() {
        browser.get('/');
    });

    it('should expect something', function() {
        var x = 1;
        expect(x).toEqual(x);
    });
});

