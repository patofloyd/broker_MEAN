app.directive('aboutTabs', [function(){
	// Runs during compile
	return {
		templateUrl: '/directives/aboutTabs.html',
		controller : ['$scope','Alertify', function($scope, Alertify){
			
			$scope.send = function(){
				console.log("fungerar");
			};
			
		}]
 	};
}]);