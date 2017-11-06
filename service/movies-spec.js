describe('movies', function() {

  beforeEach(module('mdb'));

  var $utils, $movies, $http;
  beforeEach(inject(function(_$utils_, _$movies_, _$http_) {
    $utils = _$utils_;
    $movies = _$movies_;
    $http = _$http_;
  }));

  it('should fetch movie info by id', function() {
    var fakeUrl = 'fakeUrl';
    spyOn($utils, 'buildUrl').and.callFake(function() { return fakeUrl; });
    spyOn($http, 'get').and.callThrough();

    $movies.getById();
    expect($http.get).toHaveBeenCalledWith(fakeUrl);
  });

  it('should fetch movie list by actor id', function() {
    var fakeUrl = 'fakeUrl';
    spyOn($utils, 'buildUrl').and.callFake(function() { return fakeUrl; });
    spyOn($http, 'get').and.callThrough();

    $movies.getByActor();
    expect($http.get).toHaveBeenCalledWith(fakeUrl);
  });

});
