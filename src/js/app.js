var app = angular.module('TimerForChild', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller : 'startCtrl'
    })
    .when('/game', {
        templateUrl: 'partials/clock.html',
        controller : 'gameCtrl'
    })
    .when('/credits', {
        templateUrl: 'partials/credits.html',
        controller : 'creditCtrl'
    })
    .when('/settings', {
        templateUrl: 'partials/settings.html',
        controller : 'settingsCtrl'
    })
    .otherwise({ redirectTo: '/' });
}]);
