(function() {

  function analytics($http, $utils) {
    var analytics = {};

    analytics.getFemaleActorsByRating = function() {
      var url = $utils.buildUrl('analytics/FemaleActorsByHighestRating');
      return $http.get(url);
    };

    analytics.getMaleActorsByRating = function() {
      var url = $utils.buildUrl('analytics/MaleActorsByHighestRating');
      return $http.get(url);
    };

    return analytics;
  }

  angular
    .module('mdb')
    .factory('$analytics', analytics);

  analytics.$inject = [
    '$http',
    '$utils'
  ];
})();
