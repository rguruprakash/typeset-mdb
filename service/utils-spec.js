describe('utils', function() {

  beforeEach(module('mdb'));

  var $utils, BASE_URL, AUTH_TOKEN;
  beforeEach(inject(function(_$utils_, _BASE_URL_, _AUTH_TOKEN_) {
    $utils = _$utils_;
    BASE_URL = _BASE_URL_;
    AUTH_TOKEN = _AUTH_TOKEN_;
  }));

  it('should build url',function() {
    var path = 'test';
    var res = BASE_URL + path + '/?t=123&auth_token=' + AUTH_TOKEN;

    expect($utils.buildUrl(path, {t: 123})).toEqual(res);
  });

});
