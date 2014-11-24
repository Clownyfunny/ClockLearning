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
var canvas = document.getElementById('clock');
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