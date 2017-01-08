'use strict';

describe('helloworld', function () {

    beforeEach(module('helloworld'));
    it('should expect something too', function() {
        var x = 1;
        expect(x).toEqual(x);
    });
});
