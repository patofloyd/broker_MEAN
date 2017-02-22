app.directive('headerCarousel', [function(){

	return {
    templateUrl: '/directives/headerCarousel.html',
    controller: ['$scope', '$interval', function($scope, $interval) {
    	$scope.imgs = [
    		"imgs/Home/bild1.jpg",
    		"imgs/Home/bild2.jpg",
    		"imgs/Home/bild3.jpg",
    		"imgs/Home/bild4.jpg",
    		"imgs/Home/bild5.jpg"
    	];

    	$scope.myInterval = 7000;
	    $scope.noWrapSlides = false;
	    $scope.active = 0;
    }]
  };
}]);