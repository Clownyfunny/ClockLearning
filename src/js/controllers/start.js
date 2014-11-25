var app = angular.module("start");

app.controller('startCtrl', ['$scope', function($scope) {
    var canvas = document.getElementById('start');
    var context = canvas.getContext('2d');
    var sources = {
        settings : "src/images/button_options.png",
        start : "src/images/button_start.png",
        credit : "src/images/button_credits.png",
        title : "src/images/title.png"
    };

    loadImages(sources, function(images){
        context.drawImage(images.settings, 350,260);
        context.drawImage(images.start, 350, 140);
        context.drawImage(images.credit, 350, 380);
        context.drawImage(images.title, 350, 0);
    });

    
    
}]);