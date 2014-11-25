var app = angular.module("game", ["generateTime"]);

app.controller('gameCtrl', function($rootScope, $scope, $timeout, $location, generateTime) {
    console.log();
    var spanImage = new Image();
    var upValueImage = new Image();
    var downValueImage = new Image();
    
    var canvas = new Kinetic.Stage({
       container: "game",
        width: 495,
        height: 200 
    });
    var spanOneLayer= new Kinetic.Layer({ x: 60, y: 0});
    var spanTwoLayer= new Kinetic.Layer({ x: 250, y: 0});
    var upValueOneLayer= new Kinetic.Layer({ x: 0, y: 0 });
    var upValueTwoLayer= new Kinetic.Layer({ x: 435, y: 0 });
    var downValueOneLayer= new Kinetic.Layer({ x: 0, y: 80 });
    var downValueTwoLayer= new Kinetic.Layer({ x: 435, y: 80 });
    
    spanImage.onload = function(){
        var span = new Kinetic.Image({
            image: spanImage
        });
        spanOneLayer.add(span);
        spanOneLayer.draw();
        spanTwoLayer.add(span);
        spanTwoLayer.draw();
    };
    upValueImage.onload = function(){
        var up = new Kinetic.Image({
            image: upValueImage
        });
        upValueOneLayer.add(up);
        upValueOneLayer.draw();
        upValueTwoLayer.add(up);
        upValueTwoLayer.draw();
    };
    downValueImage.onload = function(){
        var down = new Kinetic.Image({
            image: downValueImage
        });
        downValueOneLayer.add(down);
        downValueOneLayer.draw();
        downValueTwoLayer.add(down);
        downValueTwoLayer.draw();
    };
    upValueImage.src = "src/images/button_up.png";
    downValueImage.src = "src/images/button_down.png";
    spanImage.src = "src/images/span.png";
    
    canvas.add(upValueOneLayer, upValueTwoLayer, downValueOneLayer, downValueTwoLayer, spanOneLayer, spanTwoLayer);

});