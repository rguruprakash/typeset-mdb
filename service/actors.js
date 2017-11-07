(function() {
  function actors($http, $utils) {
    var actors = {};

    actors.getById = function(actorId) {
      var url = $utils.buildUrl('actor/id/' + actorId);
      return $http.get(url);
    };

    actors.getByMovieId = function(movieId) {
      var url = $utils.buildUrl('movie/' + movieId + '/actors/');
      return $http.get(url);
    };

    return actors;
  }

  angular
    .module('mdb')
    .factory('$actors', actors);

  actors.$inject = [
    '$http',
    '$utils'
  ];
})();
