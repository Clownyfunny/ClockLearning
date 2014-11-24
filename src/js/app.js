var app = angular.module('ClockLearning', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'src/partials/home.html',
        controller : 'startCtrl'
    })
    .when('/game', {
        templateUrl: 'src/partials/clock.html',
        controller : 'gameCtrl'
    })
    .when('/credits', {
        templateUrl: 'src/partials/credits.html',
        controller : 'creditCtrl'
    })
    .when('/settings', {
        templateUrl: 'src/partials/settings.html',
        controller : 'settingsCtrl'
    })
    .otherwise({ redirectTo: '/' });
}]);

app.controller('startCtrl', ['$scope', function($scope) {
}]);
app.controller('gameCtrl', ['$scope', function($scope) {
}]);
app.controller('settingsCtrl', ['$scope', function($scope) {
}]);
app.controller('creditCtrl', ['$scope', function($scope) {
}]);

