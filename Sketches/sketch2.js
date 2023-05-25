function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(120);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 300);
  
  if (mouseX > 0 && mouseX <= 100) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(30);
    text('Frozen',10,100);
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(35);
    text('is the best',60,140)
   }
  
  else if (mouseX > 200 && mouseX <= 300) {
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(40);
    text('disney',200,180)
  
  }

  else if (mouseX > 300 && mouseX <= 400) {
    fill(211, 192, 2);
    ellipse(mouseX, mouseY, 40, 40);
    textSize(45);
    text('movie!',270,130)
  }
}







