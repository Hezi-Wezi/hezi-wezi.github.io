function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //The Head
fill('violet');
  ellipse(200,200,200,300)


//The Eyes
fill('white')
  circle(160,130,40)
  circle(230,130,40)
  fill('black')
  circle(155,125,21)
  circle(235,125,21)

  //The Mouth
triangle(200,260,168,229,235,229)
  
  rectangle()
  
  
  //Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
}