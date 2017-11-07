(function() {

  function moviesCtrl($scope, $movies, $stateParams, $log, $state, $window, $actors){
    $scope.showMovieInfo = function(movieId) {
      $state.go('movie', {
        movieId: movieId
      });
    };

    $scope.getActorById = function(id) {
      $actors.getById(id).then(function(res) {
        $scope.actor = res.data;
      }, function(err) {
        $window.alert('Unable to actor info');
        $log.error(err);
      });
    };

    $scope.getMoviesByActorId = function(id, limit) {
      $movies.getByActor(id, limit).then(function(res) {
        $scope.movies = res.data;
      }, function(err) {
        $window.alert('Unable to fetch movie list');
        $log.error(err);
      });
    };

    $scope.init = function() {
      $scope.movies = [];

      $scope.getActorById($stateParams.actorId);
      $scope.getMoviesByActorId($stateParams.actorId, 20);
    };

    $scope.init();
  }

  angular
    .module('mdb')
    .controller('MoviesCtrl', moviesCtrl);

  moviesCtrl.$inject = [
    '$scope',
    '$movies',
    '$stateParams',
    '$log',
    '$state',
    '$window',
    '$actors'
  ];
})();
