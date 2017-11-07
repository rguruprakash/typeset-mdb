(function() {

  function movieInfoCtrl($scope, $movies, $stateParams, $log, $window){
    $scope.getMovieInfo = function() {
      var movieId = $stateParams.movieId;
      $movies.getById(movieId).then(function(res) {
        $scope.info = res.data;
      }, function(err) {
        $window.alert('Unable to fetch movie info');
        $log.error(err);
      });
    };
    
    $scope.getMovieInfo();
  }

  angular
    .module('mdb')
    .controller('MovieinfoCtrl', movieInfoCtrl);

  movieInfoCtrl.$inject = [
    '$scope',
    '$movies',
    '$stateParams',
    '$log',
    '$window'
  ];
})();
