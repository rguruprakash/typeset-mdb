(function() {
  angular
    .module('mdb', ['ui.router', 'ngResource']);

  function config($stateProvider, $urlRouterProvider) {
   
    $stateProvider
      .state('analytics', {
        url: '/home',
        templateUrl: 'partial/analytics/analytics.html',
        controller: 'AnalyticsCtrl'
      })
      .state('moviesByActor', {
        url: '/actor/:actorId/movies',
        templateUrl: 'partial/movies/movies.html',
        controller: 'MoviesCtrl'
      })
      .state('movie', {
        url: '/movies/:movieId',
        templateUrl: 'partial/movieInfo/movieInfo.html',
        controller: 'MovieinfoCtrl'
      });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');
  }

  angular
    .module('mdb')
    .config(config);
  
  config.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];

  angular
    .module('mdb')
    .constant('BASE_URL', 'http://api.cinemalytics.in/v2/')
    .constant('AUTH_TOKEN', 'E016434ACA301DE1A82E09BF037E3E4D');

})();

