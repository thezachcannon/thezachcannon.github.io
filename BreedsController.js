(function() {
  var app = angular.module("bellersGoldens");

  var BreedsController = function($scope) {
    $scope.breeds = true;
    $scope.getGoldenView = function (){
      $scope.berneseView = false;
      $scope.goldendoodleView = false;
      $scope.goldenView = true;

    };
    $scope.getBerneseView = function (){
          $scope.goldendoodleView = false;
      $scope.goldenView = false;
       $scope.berneseView = true;
   
    };
    $scope.getGoldenDoodleView = function (){
          $scope.goldenView = false;
          $scope.berneseView = false;
         $scope.goldendoodleView = true;

    };
  };

  app.controller("BreedsController", ["$scope", BreedsController]);
}());