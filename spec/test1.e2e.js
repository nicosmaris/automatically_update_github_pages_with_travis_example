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

describe('calculator', function () {

  beforeEach(module('calculatorApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sum', function () {
    it('1 + 2 should equal 3', function () {
      var $scope = {};
      var controller = $controller('CalculatorController', { $scope: $scope });
      $scope.x = 1;
      $scope.y = 2;
      $scope.sum();
      expect($scope.z).toBe(3);
    }); 

    it('4 + -1 should equal 2', function () {
      var $scope = {};
      var controller = $controller('CalculatorController', { $scope: $scope });
      $scope.x = 4;
      $scope.y = -1;
      $scope.sum();
      expect($scope.z).toBe(3);
    }); 

    it('z should default to zero', function () {
      var $scope = {};
      var controller = $controller('CalculatorController', { $scope: $scope });
      expect($scope.z).toBe(0);
    });
  });

});
