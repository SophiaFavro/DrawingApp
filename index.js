var colorPicker;
var currentColor;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    colorPicker = createColorPicker("blue");
    colorPicker.position(25, 350);
    background(204);
    fill("black");
    text("Choose your color", 25, 400);
    let circle = ellipse(50, 40, 50);
    text("press c for circle", 25, 80);
    let square = rect(25, 100, 50, 50);
    text("press s for square", 25, 175);
    let rectangle = rect(25, 200, 50, 100);
    text("press r for rectangle", 25, 325);
    saveButton = createButton("Save");
    saveButton.position(25, 425);
    saveButton.mousePressed(saveImage);
    lineButton = createButton("Line");
    lineButton.position(25, 450);
    lineButton.mouseIsPressed(drawLine);
  }
  
  function draw() {
  }

  function saveImage() {
    save("Mycanvas.jpg");
  }

  function mouseDragged() {
    if(mouseIsPressed === true) {
        stroke(colorPicker.color());
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }

