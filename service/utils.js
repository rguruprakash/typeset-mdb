(function() {
  function utils(BASE_URL, AUTH_TOKEN) {
    var service = {};

    service.buildUrl = function(path, qp) {
      qp = qp || {};
      qp.auth_token = AUTH_TOKEN;
      var url = BASE_URL + path + '/';
      url += '?' + $.param(qp); 
      return url;
    };

    return service;
  }

  angular
    .module('mdb')
    .factory('$utils', utils);

  utils.$inject = [
    'BASE_URL',
    'AUTH_TOKEN'
  ];
})();
