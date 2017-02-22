// allows us to open a ui bootstrap modal
// using the $uibModal service from ui bootstrap
app.directive('myModalSeller', [function() {

  return {
    //templateUrl: '/directives/myModalSeller.html',
    controller: ['$scope', '$uibModal', function($scope, $uibModal) {
      // opens our modal on ng-click!
      $scope.openModal = function(sellerObj) {

        // create a new modal with the following settings
        var modalInstance = $uibModal.open({
          animation: true, // animate show/hide
          // use this template
          templateUrl: '/modals/mySellerModalInstance.html',
          // use this controller (src: /modals/myModalInstance.js)
          controller: 'mySellerModalInstance',
          // prevent dismissing by clicking on backdrop
          //backdrop: 'static',
          // make our modal large
          size: 'lg',
          resolve: {
            seller: sellerObj
          }
        });

        modalInstance.result.then(
          // "done" (user said OK)
          function (selectedOption) {
            // selected option is sent to us from the modal controller
            // ($uibModalInstance.close($scope.selectedOption))
            console.log('Modal closed at: ' + new Date() + ', User selected ' + selectedOption);
          }, function () {
            // "fail" (user said cancel)
            // the modal controller did not send us anything
            // ($uibModalInstance.dismiss())
            console.log('Modal dismissed at: ' + new Date());
          }
        );
      };
    }]
  };
}]);