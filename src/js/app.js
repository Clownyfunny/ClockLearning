var app = angular.module('ClockLearning', ['ngRoute', 'ngDialog', 'start', 'game', "credits", "settings"]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'src/partials/start.html',
        controller : 'startCtrl'
    })
    .when('/game', {
        templateUrl: 'src/partials/game.html',
        controller : 'gameCtrl'
    })
    .when('/credits', {
        templateUrl: 'src/partials/credits.html',
        controller : 'creditsCtrl'
    })
    .when('/settings', {
        templateUrl: 'src/partials/settings.html',
        controller : 'settingsCtrl'
    })
    .otherwise({ redirectTo: '/' });
}]);

function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
        numImages++;
    }
    for(var src in sources) {
        images[src] = new Image();
        images[src].onload = function() {
            if(++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
};