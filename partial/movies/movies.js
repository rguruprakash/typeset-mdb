(function() {

  function moviesCtrl($scope, $movies, $stateParams, $log, $state, $window){
    $scope.showMovieInfo = function(movieId) {
      $state.go('movie', {
        movieId: movieId
      });
    };

    $scope.init = function() {
      $scope.movies = [];
      $movies.getByActor($stateParams.actorId, 20).then(function(res) {
        $scope.movies = res.data;
      }, function(err) {
        $window.alert('Unable to fetch movie list');
        $log.error(err);
      });
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
    '$window'
  ];
})();
