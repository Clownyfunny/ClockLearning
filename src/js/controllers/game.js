var app = angular.module("game", ["generateTime"]);

app.controller('gameCtrl', function($rootScope, ngDialog, $scope, $timeout, $location, generateTime) {
    $scope.location = $location;
	$scope.hours = 0;
	$scope.minutes = 0;
	$scope.clock = {};
	generateTime.initGame($rootScope.clockColor);
    generateTime.startGame();
    $scope.clock.info = generateTime.getPartTime();
    
    $scope.reloadGame = function() {
	    $timeout(function() {
	        generateTime.reloadGame();
	        $scope.hour = 0;
	        $scope.minute = 0;
	        $scope.clock.info = generateTime.getPartTime();
	    }, 200);
	};
    var spanImage = new Image();
    var upValueImage = new Image();
    var downValueImage = new Image();
    var verifyImage = new Image();
    
    var canvas = new Kinetic.Stage({
       container: "game",
        width: 495,
        height: 400 
    });
    var spanOneLayer= new Kinetic.Layer({ x: 60, y: 80});
    var spanTwoLayer= new Kinetic.Layer({ x: 250, y: 80});
    var upValueOneLayer= new Kinetic.Layer({ x: 0, y: 80 });
    var upValueTwoLayer= new Kinetic.Layer({ x: 435, y: 80 });
    var downValueOneLayer= new Kinetic.Layer({ x: 0, y: 160 });
    var downValueTwoLayer= new Kinetic.Layer({ x: 435, y: 160 });
    var verifyLayer = new Kinetic.Layer({ x: 12, y: 260});
    var hoursValueLayer = new Kinetic.Layer();
    var minutesValueLayer = new Kinetic.Layer();
    var dayTimeTextLayer = new Kinetic.Layer();
    
    var dayTimeText = new Kinetic.Text({
        x: 110,
        y: 10,
        text: generateTime.getPartTime(),
        fontSize: 50,
        fontFamily: 'Calibri',
        fill: 'black'
    });
    dayTimeTextLayer.add(dayTimeText);
    
    var hoursText = new Kinetic.Text({
        x: 110,
        y: 110,
        text: $scope.hours,
        fontSize: 100,
        fontFamily: 'Calibri',
        fill: 'black'
    });  
    hoursValueLayer.add(hoursText);
    
    var minutesText = new Kinetic.Text({
        x: 300,
        y: 110,
        text: $scope.minutes,
        fontSize: 100,
        fontFamily: 'Calibri',
        fill: 'black'
    });  
    minutesValueLayer.add(minutesText);
    
    spanImage.onload = function(){
        var span = new Kinetic.Image({
            image: spanImage
        });
        spanOneLayer.add(span);
        spanOneLayer.draw();
        spanTwoLayer.add(span);
        spanTwoLayer.draw();
    };
    
    verifyImage.onload = function(){
        var verify = new Kinetic.Image({
            image: verifyImage
        });
        verify.on("click", function(){
            if (generateTime.checkHour($scope.hours, $scope.minutes)) {
                ngDialog.open({
                    preCloseCallback: function(value) {
                        if (value === 0) {
                            $scope.location.path("/");
                        }
                        if (value == '$document' || value == '$closeButton' || value == 1) {
                            $scope.reloadGame();
                        }
                    },
                    scope: $scope,
                    template: './src/partials/winnerPopup.html'
                    
                });
            } else {
                $scope.clock.hour = generateTime.getHour();
                $scope.clock.minute = generateTime.getMinute();
                ngDialog.open({
                    preCloseCallback: function(value) {
                        if (value === 0) {
                            $scope.location.path("/");
                        }
                        if (value == '$document' || value == '$closeButton' || value == 1) {
                            $scope.reloadGame();
                        }
                    },
                    scope: $scope,
                    template: './src/partials/loserPopup.html'
                });
            };
        });
        verifyLayer.add(verify);
        verifyLayer.draw();
    };
    
    upValueImage.onload = function(){
        var up1 = new Kinetic.Image({
            image: upValueImage
        });
        up1.on("click", function(){
            if($scope.hours<24){
                $scope.hours = $scope.hours + 1;
                hoursText.setText($scope.hours);
                hoursValueLayer.add(hoursText);
                hoursValueLayer.draw();
            }
        });
        upValueOneLayer.add(up1);
        upValueOneLayer.draw();
        var up2 = new Kinetic.Image({
            image: upValueImage
        });
        up2.on("click", function(){
            if($scope.minutes<55){
                $scope.minutes = $scope.minutes + 5;
                minutesText.setText($scope.minutes);
                minutesValueLayer.add(minutesText);
                minutesValueLayer.draw();
            }
        });
        upValueTwoLayer.add(up2);
        upValueTwoLayer.draw();
    };
    downValueImage.onload = function(){
        var down1 = new Kinetic.Image({
            image: downValueImage
        });
        down1.on("click", function(){
            if($scope.hours>0){
                $scope.hours = $scope.hours - 1;
                hoursText.setText($scope.hours);
                hoursValueLayer.add(hoursText);
                hoursValueLayer.draw();
            }
        });
        downValueOneLayer.add(down1);
        downValueOneLayer.draw();
        var down2 = new Kinetic.Image({
            image: downValueImage
        });
        down2.on("click", function(){
            if($scope.minutes>0){
                $scope.minutes = $scope.minutes - 5;
                minutesText.setText($scope.minutes);
                minutesValueLayer.add(minutesText);
                minutesValueLayer.draw();
            }
        });
        downValueTwoLayer.add(down2);
        downValueTwoLayer.draw();
    };
    
    upValueImage.src = "src/images/button_up.png";
    downValueImage.src = "src/images/button_down.png";
    spanImage.src = "src/images/span.png";
    verifyImage.src = "src/images/verify.png";
    
    canvas.add(upValueOneLayer, upValueTwoLayer, downValueOneLayer, downValueTwoLayer, spanOneLayer, spanTwoLayer, verifyLayer, hoursValueLayer, minutesValueLayer, dayTimeTextLayer);

});