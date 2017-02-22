app.directive('subNav', [function(){
	// Runs during compile
	return {
		templateUrl: '/directives/subNavObject.html',
    	controller: ('MenuCntl', ['$scope','$route', '$routeParams', '$location', 
   			function MenuCntl($scope, $route, $routeParams, $location) {
   			$scope.$route = $route;
   			$scope.$location = $location;
   			$scope.$routeParams = $routeParams;
				}])
	};
}]);