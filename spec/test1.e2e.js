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

describe('helloworld', function () {

    beforeEach(module('helloworld'));
    it('should expect something too', function() {
        var x = 1;
        expect(x).toEqual(x);
    });
});
