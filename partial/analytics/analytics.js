(function() {

  function analyticsCtrl($scope, $analytics, $log, $state, $window) {

    $scope.getMaleActorsByRating = function() {
      $analytics.getMaleActorsByRating().then(function(res) {
        $scope.maleActors = res.data;
      }, function(err) {
        $window.alert('Unable to fetch top male actors by rating');
        $log.error(err);
      });
    };

    $scope.getFemaleActorsByRating = function() {
      $analytics.getFemaleActorsByRating().then(function(res) {
        $scope.femaleActors = res.data;
      }, function(err) {
        $window.alert('Unable to fetch top female actors by rating');
        $log.error(err);
      });
    };

    $scope.showTopMovies = function(actorId) {
      $state.go('moviesByActor', {
        actorId: actorId
      });
    };

    $scope.init = function() {
      $scope.maleActors = [];
      $scope.femaleActors = [];

      $scope.getMaleActorsByRating();
      $scope.getFemaleActorsByRating();
    };

    $scope.init();
  }

  angular
    .module('mdb')
    .controller('AnalyticsCtrl', analyticsCtrl);

  analyticsCtrl.$inject = [
    '$scope',
    '$analytics',
    '$log',
    '$state',
    '$window'
  ];
})();
