var app = angular.module("game");

app.controller('gameCtrl', ['$scope', function($scope) {
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    var sources = {
        horloge1 : "src/images/clock1.png",
        horloge2 : "src/images/clock2.png",
        horloge3 : "src/images/clock3.png",
        minutes : "src/images/firstHand.png",
        hours : "src/images/secondHand.png",
        hight_button : "src/images/button_up.png",
        down_button : "src/images/button_down.png",
        number_content : "src/images/span.png",
        verify : "src/images/verify.png"

    };

    loadImages(sources, function(images){
        context.drawImage(images.horloge1, 100, 30);
        context.drawImage(images.minutes, 50, 20);
        context.drawImage(images.hours, 30, 10);
        context.drawImage(images.hight_button, 30, 10);
        context.drawImage(images.hight_button, 30, 10);
        context.drawImage(images.down_button, 30, 10);
        context.drawImage(images.down_button, 30, 10);
        context.drawImage(images.number_content, 30, 10);
        context.drawImage(images.number_content, 30, 10);
        context.drawImage(images.verify, 30, 10);
    })
}]);