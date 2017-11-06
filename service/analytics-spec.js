describe('analytics', function() {

  beforeEach(module('mdb'));

  var $utils, $analytics, $http;
  beforeEach(inject(function(_$utils_, _$analytics_, _$http_) {
    $utils = _$utils_;
    $analytics = _$analytics_;
    $http = _$http_;
  }));

  it('should get male actors by rating', function() {
    var fakeUrl = 'fakeUrl';
    spyOn($utils, 'buildUrl').and.callFake(function() { return fakeUrl; });
    spyOn($http, 'get').and.callThrough();

    $analytics.getMaleActorsByRating();
    expect($http.get).toHaveBeenCalledWith(fakeUrl);
  });

  it('should get female actors by rating', function() {
    var fakeUrl = 'fakeUrl';
    spyOn($utils, 'buildUrl').and.callFake(function() { return fakeUrl; });
    spyOn($http, 'get').and.callThrough();

    $analytics.getFemaleActorsByRating();
    expect($http.get).toHaveBeenCalledWith(fakeUrl);
  });

});
