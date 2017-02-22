describe('AboutController ', function() {

    beforeEach(module('myApp'));


    var AboutCtrl,
    scope;

    beforeEach(inject(function ($rootScope, $controller, About) {
        scope = $rootScope.$new();
        
        spyOn(About, "get").and.callFake(function(){
            console.log("mock run");

            var fake = {status : "OK", someOther : 42}

            var callback = arguments[0];
            callback(JSON.stringify(fake,null,4));
        })
        AboutCtrl = $controller('about', {
            $scope: scope,
            About : About
        });
    }));

    it('should check that "items" is defined', function () {

        expect(scope.abouts).toBeDefined()

    });

    


});
