app.controller("about", ["$scope",'Alertify', "About", function($scope, Alertify, About) {
  
	 About.get(function(allAbouts) {
		
	 	$scope.abouts = allAbouts;
	 });

 
}]);