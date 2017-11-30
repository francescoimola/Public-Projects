function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	rotate(HALF_PI/3.0);
	scale(8, 8);
	rect(70, 5, 60, 100);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}