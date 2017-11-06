(function() {

  function analyticsCtrl($scope, $analytics, $log, $state) {

    $scope.getMaleActorsByRating = function() {
      $analytics.getMaleActorsByRating().then(function(res) {
        $scope.maleActors = res.data;
      }, function(err) {
        $log.error(err);
      });
    };

    $scope.getFemaleActorsByRating = function() {
      $analytics.getFemaleActorsByRating().then(function(res) {
        $scope.femaleActors = res.data;
      }, function(err) {
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
    '$state'
  ];
})();
