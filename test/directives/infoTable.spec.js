describe('infoTable', function() {
  var $compile,
      $rootScope;


  // Load the myApp module, which contains the directive
  beforeEach(module('myApp'));
  beforeEach(module('/directives/infoTable.html'));



  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  

  it('should contain element', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile("<info-table></info-table>")($rootScope);

    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();

    // Check that the compiled element contains the templated content
    expect(element.html()).toMatch('<div class="container-fluid">');
    expect(element.html()).toMatch('<div class="well">');
      

  });
});