var app = angular.module("settings");

app.controller('settingsCtrl', ['$scope', function($scope) {
    var canvas = document.getElementById('settings');
    var context = canvas.getContext('2d');
    var sources = {
        horloge1 : "src/images/clock1.png",
        horloge2 : "src/images/clock2.png",
        horloge3 : "src/images/clock3.png",

    };

    loadImages(sources, function(images){
        context.drawImage(images.horloge1, 100, 30, 300, 300);
        context.drawImage(images.horloge2, 50, 20);
        context.drawImage(images.horloge3, 30, 10);
    })
}]);