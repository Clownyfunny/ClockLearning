var Clock = function() {    
    var clockImage = new Image();
    var hoursImage = new Image();
    var minutesImage = new Image();

    this.init = function(){
        var canvas = new Kinetic.Stage({
           container: "clock",
            width: 300,
            height: 300 
        });
        var clockLayer= new Kinetic.Layer({ x: 0, y: 0 });
        var hoursLayer= new Kinetic.Layer({ x: 149.5, y: 145 });
        var minutesLayer= new Kinetic.Layer({ x: 149.5, y: 145 });

        clockImage.onload = function(){
            var clock = new Kinetic.Image({
                image: clockImage
            });
            clockLayer.add(clock);
            clockLayer.draw();
        };

        hoursImage.onload = function(){
            var hours = new Kinetic.Image({
                image: hoursImage
            });
            hoursLayer.add(hours);
            hoursLayer.draw();
        };

        minutesImage.onload = function(){
            var minutes = new Kinetic.Image({
                image: minutesImage
            });
            minutesLayer.add(minutes);
            minutesLayer.draw();
        };

        clockImage.src = "src/images/clock1.png";
        hoursImage.src = "src/images/firstHand.png";
        minutesImage.src = "src/images/secondHand.png";

        canvas.add(clockLayer, hoursLayer, minutesLayer);
    };
    this.onChangeClock = function(clock) {
        clockImage.src = './src/img/' + clock + '.png';
    };
    this.setTime = function(hour, minute) {
        var degHour = hour * 360 / 12;
        var degMinute = minute * 360 / 60;
        this.onRotateHour(degHour);
        this.onRotateMinute(degMinute);
    };
    this.onRotateHour = function(deg) {
        hoursLayer.rotation(deg);
        hoursLayer.draw();
    };

    this.onRotateMinute = function(deg) {
        minutesLayer.rotation(deg);
        minutesLayer.draw();
    };
    this.init();
}