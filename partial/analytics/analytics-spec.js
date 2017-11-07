describe('AnalyticsCtrl', function() {

  beforeEach(module('mdb'));

  var scope, ctrl, $analytics, $q, $log, $controller, $state, $window;

  beforeEach(inject(function($rootScope, _$controller_, _$analytics_, _$q_, _$log_, _$state_, _$window_) {
    scope = $rootScope.$new();
    $analytics = _$analytics_;
    $q = _$q_;
    $log = _$log_;
    $controller = _$controller_;
    ctrl = $controller('AnalyticsCtrl', {$scope: scope});
    $state = _$state_;
    $window  =_$window_;
  }));

  var deferred;
  beforeEach(function() {
    spyOn($window, 'alert').and.callFake(function() {});
    deferred = $q.defer();
  });

  it('should init $scope.maleActors to empty array', function() {
      expect(scope.maleActors.length).toBe(0); 
  });

  it('should init $scope.femaleActors to empty array', function() {
      expect(scope.femaleActors.length).toBe(0); 
  });

  it('should fetch male and female actors list on init' , function() {
    spyOn(scope, 'getMaleActorsByRating').and.callThrough();
    spyOn(scope, 'getFemaleActorsByRating').and.callThrough();

    scope.init();

    expect(scope.getMaleActorsByRating).toHaveBeenCalled();
    expect(scope.getFemaleActorsByRating).toHaveBeenCalled();
  });

  it('should fetch list of male actors', function() {
    spyOn($analytics, 'getMaleActorsByRating').and.callFake(function() { return deferred.promise; });

    var fakeData = {data: [{id: 1}]};
    deferred.resolve(fakeData);

    scope.getMaleActorsByRating();

    scope.$apply();

    expect(scope.maleActors).toBe(fakeData.data);
  });

  it('should log error if unable to fetch list of male actors', function() {
    spyOn($analytics, 'getMaleActorsByRating').and.callFake(function() { return deferred.promise; });
    spyOn($log, 'error').and.callThrough();

    var fakeError = {error: 'fake'};
    deferred.reject(fakeError);

    scope.getMaleActorsByRating();

    scope.$apply();
    
    expect($log.error).toHaveBeenCalledWith(fakeError);
  });

  it('should alert proper msg if unable to fetch list of male actors', function() {
    spyOn($analytics, 'getMaleActorsByRating').and.callFake(function() { return deferred.promise; });
    deferred.reject();

    scope.getMaleActorsByRating();

    scope.$apply();
    
    expect($window.alert).toHaveBeenCalled();
  });

  it('should fetch list of female actors', function() {
    spyOn($analytics, 'getFemaleActorsByRating').and.callFake(function() { return deferred.promise; });

    var fakeData = {data: [{id: 1}]};
    deferred.resolve(fakeData);

    scope.getFemaleActorsByRating();

    scope.$apply();

    expect(scope.femaleActors).toBe(fakeData.data);
  });

  it('should log error if unable to fetch list of female actors', function() {
    spyOn($analytics, 'getFemaleActorsByRating').and.callFake(function() { return deferred.promise; });
    spyOn($log, 'error').and.callThrough();

    var fakeError = {error: 'fake'};
    deferred.reject(fakeError);

    scope.getFemaleActorsByRating();

    scope.$apply();
    
    expect($log.error).toHaveBeenCalledWith(fakeError);
  });

  it('should alert proper msg if unable to fetch list of female actors', function() {
    spyOn($analytics, 'getFemaleActorsByRating').and.callFake(function() { return deferred.promise; });
    deferred.reject();

    scope.getFemaleActorsByRating();

    scope.$apply();
    
    expect($window.alert).toHaveBeenCalled();
  });

  it('should navigate to movies route', function() {
    spyOn($state, 'go').and.callThrough();

    scope.showTopMovies('actorId');

    expect($state.go).toHaveBeenCalledWith('moviesByActor', {
      actorId: 'actorId'
    });
  });

});
