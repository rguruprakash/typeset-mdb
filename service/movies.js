(function() {

  function movies($http, $utils) {
    var movies = {};

    movies.getById = function(movieId) {
      var url = $utils.buildUrl('movie/id/' + movieId, {
        movieId: movieId
      });

      return $http.get(url);
    };

    movies.getByActor = function(actorId, limit) {
      var url = $utils.buildUrl('actor/' + actorId + '/movies/', {
        limit: limit
      });

      return $http.get(url);
    };
    return movies;
  }

  angular
    .module('mdb')
    .factory('$movies', movies);

  movies.$inject = [
    '$http',
    '$utils'
  ];
})();
