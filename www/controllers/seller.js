app.controller("seller", ["$scope", "Seller", function($scope, Seller){

	Seller.get(function(allSellers){
		$scope.sellers = allSellers;
	});

}]); 