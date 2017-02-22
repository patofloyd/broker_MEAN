app.directive('myCarousel', [function(){

	return{
		templateUrl: '/directives/detailedObject/myCarousel.html',
		controller: ['$scope', '$routeParams', 'Home', function($scope, $routeParams, Home){
			
			//set the initial values
			$scope.active = 0;
			$scope.slides = [];
			var currIndex = 0;

			//uses the routparam id to load from database
			Home.getById({id:$routeParams.id}, function(data){

				//loop through the img urls in the database document
				for (var i = 0; i < data.img.length; i++) {
					
					//push each img imfo into slides array
					$scope.slides.push({
						image: data.img[i].url,
						text: data.img[i].name,
						id: currIndex++
					});
				}
			});

			//sets a initial style, called within the html template
			//sets the image and the height, withour an initial height
			//the carousel wont work
			$scope.stylify = function(slide) {
				return {
					'background-image': 'url(' + slide.image + ')',
					height: "500px"
				};
			}
		}]
	};
}]);