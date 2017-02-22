app.directive("paginationList", [

  function() {
    return {
      templateUrl: '/directives/objects/pagination.html',
      controller: ['$scope', 'Home', '$route', '$routeParams', '$location', '$http',
        function($scope, Home, $route, $routeParams, $location, $http) {
          $scope.badge = function() {
            /*
              keys -> $scope properties
              values -> type to filter
            */
            var counts = {
              allBadge: '',
              villorBadge: 'Villor',
              lagenhetBadge: 'Lägenhet'
            };
            
            Object.keys(counts).forEach(function(key) {
              var url = '/api/objekt-count';
              // if we have a type to filter with
              if (counts[key]) {
                url += '?type=' + counts[key]
              }
              $http.get(url).then(function(data) {
                // console.log("count for " + key, data);
                $scope[key] = data.data;
              });
            });
          };

          $scope.badge();

          var p = $location.$$path.substr(1), lookup = {
            "villor":"Villor",
            "lagenheter": "Lägenhet",
            "fastigheter": ""
          };

          getStuff($scope[p == "fastigheter" ? "all" : p],lookup[p]);

          function getStuff(scopeProp,type){

            var url = '/api/objekt-count';

            if(type){

              url += '?type=' + type;
            }
            console.log(url);
            
            $http.get(url).then(function(data) {
                $scope.maxSize = 5;  // how many that shows in the menu  (Limit number for pagination size.)
                $scope.bigTotalItems = data.data;  //total number of objects in db. 
                $scope.bigCurrentPage = 1; // startingpoint for active 
                $scope[scopeProp] = data;  
              });
          };
      }]
    }
}]);