app.directive('objektShow', [function($window){
	// Runs during compile
	return {
		templateUrl: '/directives/objektShow.html',
		controller : ['$scope','$anchorScroll' ,'Home', function($scope, $anchorScroll, Home){

				$scope.go = function(capsulate) {
    					
    				var limit = 6;
					var skip = capsulate * limit;
					$scope.check = capsulate;
			
    		

					Home.get({
					// _sort: {address: 1}, -> sorting on addresses asc (a-z) 
						_skip: skip, // -> skipp x number of object in the database 
  						_limit: limit // -> takes x number of objects in the database
					},function(data){

						$scope.updown = capsulate;
						$scope.information = data;
					})

					$anchorScroll()
  				}		
				$scope.go(0)

		}]}

}]);