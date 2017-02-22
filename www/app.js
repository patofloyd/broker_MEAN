console.log("Hello world!");

// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap',
  'uiGmapgoogle-maps',
  'Alertify'
]);

app.config(["$routeProvider", "$locationProvider", "uiGmapGoogleMapApiProvider", function($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {

  uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    v: '3.22', //defaults to latest 3.X anyhow
    libraries: 'weather,geometry,visualization'
  });
  $routeProvider
    .when("/", {
      templateUrl: "templates/home.html"
    })
    .when("/about",{
      templateUrl: "templates/about.html",
      controller: "about"
    })
    
    .when("/fastigheter",{
      templateUrl: "templates/fastigheter.html"
    })
    
     .when("/villor",{
      templateUrl: "templates/villor.html"
    })
    
     .when("/lagenheter",{
      templateUrl: "templates/lagenheter.html",
    })
    
    .when("/enfastighet",{
      templateUrl: "templates/enfastighet.html"
    })

    .when("/objekt/:id",{
      templateUrl: "templates/enfastighet.html"
    })

    .when("/kontakt",{  
        templateUrl: "templates/contact.html"
    })
    
    .when("/maklare",{  
        templateUrl: "templates/seller.html",
        controller: "seller"
    })
    
    .when("/bostadSokning",{  
        templateUrl: "templates/testHomes.html",
        controller: "testHomes"
    })
    
    .otherwise({
      templateUrl: "templates/404.html"
    });

    $locationProvider.html5Mode(true);
    
}]);