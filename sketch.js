function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(windowWidth, windowHeight);
  var words = [ "drawings", "x", "drawings", "x" ];
  var morewords = [ "lines", "x", "shapes", "x" ];
  var word = random(words);
  var word2 = random(words);
  var mouthword = random(morewords);
  var mouthword2 = random(morewords);
  frameRate(10)
  textSize(50);
  translate(0, -48);
  //first text
  text(word, 340, 160);
  text(word2, 258, 160);
  text(word2, 340, 195);
  text(word, 258, 195);
  //second text
  text(word2, 670, 160);
  text(word, 752, 160);
  text(word, 670, 195);
  text(word2, 752, 195);
  //third text
  text(mouthword, 480, 515);
  text(mouthword2, 562, 515);
  
  //lines
  strokeWeight(3);
  scale(1.5, 1.5);
  //eyes
  line(173, 144, 292, 144);
  line(448, 144, 567, 144);
  //nose
  line(400, 90, 340, 240);
  line(340, 240, 410, 290);
  //jawline
  line(173, 144, 280, 400);
  line(280, 400, 530, 370);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
