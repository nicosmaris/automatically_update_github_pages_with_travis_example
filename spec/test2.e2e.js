'use strict';

describe('hello-world', function () {

    beforeEach(module('helloworld'));
    it('should expect something too', function() {
        var x = 1;
        expect(x).toEqual(x);
    });
});
