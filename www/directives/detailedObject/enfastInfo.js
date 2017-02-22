// loads in ui bootstrap accordion
app.directive('enfastInfo', [function () {

  function leftPad(val,char,outLen){
    char = char || "0";
    outLen = outLen || 2;
    val += ""; // convert number etc to string
    while(val.length < outLen){
      val = char + val;
    }

    return val;
  };

  //return a string depending on a boolean value
  //myTrue & myFalse is optional
  function boolChange(myData, myTrue, myFalse){
    
    //sets default values
    if(!myTrue){
      myTrue = 'Ja';
    }
    if(!myFalse){
      myFalse = 'Nej';
    }

    //string to be returned
    var myBoolChange;

    //if true
    if(myData){

      myBoolChange = myTrue;
    }
    //if false
    else{

      myBoolChange = myFalse;
    }

    return myBoolChange;
  };

  function formatedShowDay(obj){

    var myString = "";

    if(!obj){
      myString = "Inget visningsdatum fastställt, Kontakta oss för mer information";
    }
    else{
      myString = obj.day + '/' + obj.month + ' klockan ' + 
      leftPad(obj.hour) + ':' + leftPad(obj.minutes) + '. ' + 
      boolChange(obj.open, "Öppen visning", " Sluten visning, kontakta ansvarig mäklare för mer information") ;
    }

    return myString;

  };

  return {
    templateUrl: '/directives/detailedObject/enfastInfo.html',
    controller: ['$scope', '$routeParams', 'Home', function($scope, $routeParams, Home) {
      
      $scope.info = Home.getById({id:$routeParams.id}, function(data){

        //set new values to garden and balony instead of the
        //default true/false
        $scope.info.garden = boolChange(data.garden);
        $scope.info.balcony = boolChange(data.balcony);
        $scope.info.show = formatedShowDay(data.show[0]);

        //hex for square meter symbol (the miniature and raised 2)
        $scope.info.size += ' M\xB2';
      });
    }]
  };
}]);