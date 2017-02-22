// the controller for the modal itself
// (separate from underlying view/directive)
app.controller('mySellerModalInstance', ['$scope', 'Alertify', '$uibModalInstance', 'seller', 'Contact', function($scope, Alertify,  $uibModalInstance, seller, Contact) {

  $scope.seller = seller;

  $scope.sendContactSeller = function(){
    if ($scope.contactNameSeller == undefined || $scope.contactEmailSeller == undefined || $scope.contactMessageSeller == undefined) {
      Alertify.success("Du måste fylla i alla obligatoriska rutor!");
    }
    else
      Contact.create({
        name: $scope.contactNameSeller,
        email: $scope.contactEmailSeller,
        phone: $scope.contactPhoneSeller,
        message: $scope.contactMessageSeller,
        type: "Mail to: " + seller.email 
      }, function(){
        Alertify.success("Tack för din meddelande!");
        $scope.contactNameSeller = undefined;
        $scope.contactEmailSeller = undefined;
        $scope.contactPhoneSeller = undefined;
        $scope.contactMessageSeller = undefined;
      });
  };

  $scope.cancel = function() {
    // user does not approve/ignored us
    // so send nothing back to the myModal directive
    // (modalInstance.result.then(...))
    $uibModalInstance.dismiss();
  };
}]);