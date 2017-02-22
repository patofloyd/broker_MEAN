app.controller("testHomes", ["$scope", '$rootScope', '$location', function($scope, $rootScope, $location){

	// If no result go to fastigheter
	if(!$rootScope.results){
		$location.path('/fastigheter');
	}
	
	// Sorting depending on price	
	$scope.minToMax = function(){
			var myResult = $rootScope.results;
			myResult.sort(function(a,b){
			return (a.price - b.price)
		});
	}

	$scope.maxToMin = function(){
			var myResult = $rootScope.results;
			myResult.sort(function(a,b){
			return (b.price - a.price)
		});
	}		

}]);