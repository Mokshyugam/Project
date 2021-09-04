function setup() {
	canvas =  createCanvas(450, 370);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
}


function draw() {
	image(video, 0, 0, 380, 380);
	if(status != ""){
	  r= random(255);
	  g= random(255);
	  b= random(255);
	}
	function start(){

	}
	
function modelLoaded() {
	console.log('model loaded');

  }