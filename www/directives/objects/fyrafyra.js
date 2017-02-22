app.directive('fyraFyra', [function(){
	return {
		templateUrl: 'directives/objects/fyrafyra.html',
		link: function(scope, elem, attrs) {
			elem.find( "#datepicker" ).datepicker();
		} 
	}
}]);