var generateTime = angular.module("generateTime", []);
generateTime.service('generateTime', function() {
    var hour;
    var minute;
    var clock;
    return {
        initGame: function(clockColor) {
            hour = Math.floor((Math.random() * 23));
            minute = Math.floor((Math.random() * 11)) * 5;
            clock = new Clock();
            /*clock.onChangeClock(clockColor);*/
        },
        getHour: function() {
            return hour;
        },
        getMinute: function() {
            return minute;
        },
        getPartTime: function() {
            if (hour <= 12) {
                return "Matin";
            } else {
                return "Après-midi";
            }
        },
        startGame: function() {
            clock.setTime(hour, minute);
        },
        reloadGame: function() {
            hour = Math.floor((Math.random() * 23));
            minute = Math.floor((Math.random() * 11)) * 5;
            clock.setTime(hour, minute);
        },
        checkHour: function(hourUser, minuteUser) {
            if (hour == hourUser && minute == minuteUser) {
                return true;
            }
            return false;
        }
    };
});