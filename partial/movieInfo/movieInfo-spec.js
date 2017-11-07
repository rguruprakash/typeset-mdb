describe('MovieinfoCtrl', function() {

  beforeEach(module('mdb'));

  var scope, ctrl, $movies, $q, $log, $window;

  beforeEach(inject(function($rootScope, $controller, _$movies_, _$q_, _$log_, _$window_) {
    scope = $rootScope.$new();
    ctrl = $controller('MovieinfoCtrl', {$scope: scope, $stateParams: {movieId: 'fakeMovieId'}});
    $movies = _$movies_;
    $q = _$q_;
    $log = _$log_;
    $window  =_$window_;
  }));

  var deferred;
  beforeEach(function() {
    spyOn($window, 'alert').and.callFake(function() {});
    deferred = $q.defer();
  });

  it('should fetch movie info', function() {
    spyOn($movies, 'getById').and.callFake(function() { return deferred.promise; });

    var fakeData = {data: {id: 1}};
    deferred.resolve(fakeData);

    scope.getMovieInfo();

    scope.$apply();

    expect(scope.info).toBe(fakeData.data);
  });

  it('should log error if failed to fetch movie info', function() {
    spyOn($movies, 'getById').and.callFake(function() { return deferred.promise; });
    spyOn($log, 'error').and.callThrough();

    var fakeError = {error: 'fakeError'};
    deferred.reject(fakeError);

    scope.getMovieInfo();

    scope.$apply();

    expect($log.error).toHaveBeenCalledWith(fakeError);
  });

  it('should alert proper msg if failed to fetch movie info', function() {
    spyOn($movies, 'getById').and.callFake(function() { return deferred.promise; });
    deferred.reject();

    scope.getMovieInfo();

    scope.$apply();
    
    expect($window.alert).toHaveBeenCalled();
  });

});
