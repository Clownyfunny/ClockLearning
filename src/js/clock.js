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
      }
var canvas = angular.element(document.getElementById('#clock'));
var context = canvas.getContext('2d');
var sources = {
	horloge1 : "assets/images/clock1.png",
	horloge2 : "assets/images/clock2.png",
	horloge3 : "assets/images/clock3.png",
	minutes : "assets/images/firstHand.png",
	hours : "assets/images/secondHand.png"

};

loadImages(sources, function(images){
	context.drawImage(images.horloge1, 100, 30, 300, 300);
	context.drawImage(images.minutes, 50, 20);
	context.drawImage(images.hours, 30, 10);
})