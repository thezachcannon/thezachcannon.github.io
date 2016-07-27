(function() {
  var app = angular.module("bellersGoldens", ["ngRoute" , "ui.bootstrap"]);

  app.config(function($routeProvider) {
      $routeProvider
        .when("/main", {
          templateUrl: "main.html",
          controller: "MainController"
        })
        .when("/guarantee",{
            templateUrl: "guarantee.html",
            controller: "GuaranteeController"
        })
        .when("/breeds", {
          templateUrl: "breeds.html",
          controller: "BreedsController"
        })
        .when("/contact", {
          templateUrl: "contact.html",
          controller: "ContactController"
        })
        .otherwise({redirectTo:"/main"});
  });

}());