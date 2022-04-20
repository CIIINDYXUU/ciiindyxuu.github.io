var c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = 0;
}  
    
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  var r = 255 * noise(c + 10);
  var g = 255 * noise(c + 15);
  var b = 255 * noise(c + 20);

  var w =  110 * noise(5*c + 500);
  var h = 110 * noise(5*c + 500);

  noStroke();
  fill(r, g, b);
  ellipse(mouseX, mouseY, w, h);

  c = c + 0.01;
}

function mouseDragged() {
  var r = 255 * noise(c + 10);
  var g = 255 * noise(c + 15);
  var b = 255 * noise(c + 20);
  let x = random(width);
  let y = random(height);

  stroke(r,g,b);
  strokeWeight(0.5);
  noFill();
  circle(x, y, random(30, 200));
}

function mousePressed() {
  clear();
  draw();
}