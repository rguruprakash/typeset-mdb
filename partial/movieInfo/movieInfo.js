(function() {

  function movieInfoCtrl($scope, $movies, $stateParams, $log, $window, $actors){
    $scope.getMovieInfo = function(movieId) {
      $movies.getById(movieId).then(function(res) {
        $scope.info = res.data;
      }, function(err) {
        $window.alert('Unable to fetch movie info');
        $log.error(err);
      });
    };

    $scope.getActors = function(movieId) {
      $actors.getByMovieId(movieId).then(function(res) {
        $scope.actors = res.data;
      }, function(err) {
        $window.alert('Unable to fetch actors list');
        $log.error(err);
      });
    };
    
    $scope.init = function() {
      $scope.getMovieInfo($stateParams.movieId);
      $scope.getActors($stateParams.movieId);
    };

    $scope.init();
  }

  angular
    .module('mdb')
    .controller('MovieinfoCtrl', movieInfoCtrl);

  movieInfoCtrl.$inject = [
    '$scope',
    '$movies',
    '$stateParams',
    '$log',
    '$window',
    '$actors'
  ];
})();
