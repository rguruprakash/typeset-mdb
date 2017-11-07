describe('actors', function() {

  beforeEach(module('mdb'));

  var $utils, $actors, $http;
  beforeEach(inject(function(_$utils_, _$actors_, _$http_) {
    $utils = _$utils_;
    $actors = _$actors_;
    $http = _$http_;
  }));

  it('should fetch actor by id', function() {
    var fakeUrl = 'fakeUrl';
    spyOn($utils, 'buildUrl').and.callFake(function() { return fakeUrl; });
    spyOn($http, 'get').and.callThrough();

    $actors.getById();
    expect($http.get).toHaveBeenCalledWith(fakeUrl);
  });

  it('should fetch actor by movie id', function() {
    var fakeUrl = 'fakeUrl';
    spyOn($utils, 'buildUrl').and.callFake(function() { return fakeUrl; });
    spyOn($http, 'get').and.callThrough();

    $actors.getByMovieId();
    expect($http.get).toHaveBeenCalledWith(fakeUrl);
  });

});
