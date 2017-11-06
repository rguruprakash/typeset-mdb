describe('MoviesCtrl', function() {

  beforeEach(module('mdb'));

  var scope, ctrl, $movies, $q, $log, $controller, $state;

  beforeEach(inject(function($rootScope, _$controller_, _$movies_, _$q_, _$log_, _$state_) {
    scope = $rootScope.$new();
    $movies= _$movies_;
    $q = _$q_;
    $log = _$log_;
    $controller = _$controller_;
    ctrl = $controller('MoviesCtrl', {$scope: scope, $stateParams: {actorId: 'actorId'}});
    $state = _$state_;
  }));

  var deferred;
  beforeEach(function() {
    deferred = $q.defer();
  });

  it('should navigate to movieInfo route', function() {
    spyOn($state, 'go').and.callThrough();

    scope.showMovieInfo('movieId');

    expect($state.go).toHaveBeenCalledWith('movie', {
      movieId: 'movieId'
    });
  });

  it('should call moviesByActor on init', function() {
    spyOn($movies, 'getByActor').and.callThrough();

    scope.init();

    expect($movies.getByActor).toHaveBeenCalledWith('actorId', 20);
  });

  it('should fetch moviesByActor on init', function() {
    spyOn($movies, 'getByActor').and.callFake(function() { return deferred.promise; });
    var fakeData = {data: []};
    deferred.resolve(fakeData);

    scope.init();

    scope.$apply();
    expect(scope.movies).toBe(fakeData.data);
  });

  it('should log error if unable to fetch moviesByActor', function() {
    spyOn($movies, 'getByActor').and.callFake(function() { return deferred.promise; });
    spyOn($log, 'error').and.callThrough();
    var fakeError = {error: 'fakeError'};
    deferred.reject(fakeError);

    scope.init();

    scope.$apply();
    expect($log.error).toHaveBeenCalledWith(fakeError);
  });

});
