var canvas = document.getElementById('start');
var context = canvas.getContext('2d');
var sources = {
	settings : "src/images/button_options.png",
	start : "src/images/button_start.png",
	credit : "src/images/button_credits.png",
    title : "src/images/title.png";
    

};

loadImages(sources, function(images){
	context.drawImage(images.settings, 100, 30, 300, 300);
	context.drawImage(images.start, 50, 20);
    context.drawImage(images.credit, 50, 20);
	context.drawImage(images.title, 30, 10);
})