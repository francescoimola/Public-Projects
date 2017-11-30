var words = [ "apple", "bear", "cat", "dog" ];
var word = random(words);

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(windowWidth, windowHeight);
  var words = [ "drawings", "x", "drawings", "x" ];
  var word = random(words);
  var word2 = random(words);
  frameRate(10)
  textSize(50);
  text(word,38,55);
  text(word2, 120,55);
  text(word2, 38,90);
  text(word, 120,90);
  strokeWeight(3);
  scale(1.5, 1.5);
  line(400, 20, 340, 170);
  line(340, 170, 410, 220);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}