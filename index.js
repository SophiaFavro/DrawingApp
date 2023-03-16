var colorPicker;
var currentColor;
var currentShape;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    colorPicker = createColorPicker("blue");
    colorPicker.position(25, 350);
    background(204);
    fill("black");
    lineButton = createButton("Line");
    lineButton.position(25, 200);
    lineButton.mousePressed(drawLine);

    circleButton = createButton("Circle");
    circleButton.position(25, 50);
    circleButton.mousePressed(drawCircle);

    squareButton = createButton("Square");
    squareButton.position(25, 100);
    squareButton.mousePressed(drawSquare);

    rectangleButton = createButton("Rectangle");
    rectangleButton.position(25, 150);
    rectangleButton.mousePressed(drawRectangle);

    saveButton = createButton("Save");
    saveButton.position(25, 425);
    saveButton.mousePressed(saveImage);
  }
  
  function draw() {
  }

  function saveImage() {
    save("Mycanvas.jpg");
  }

  function mouseDragged() {
    if(mouseIsPressed === true && currentShape === "line") {
        stroke(colorPicker.color());
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    else if(mouseIsPressed === true && currentShape === "circle") {
      stroke(colorPicker.color());
      fill(colorPicker.color());
      ellipse(mouseX, mouseY, 50);
    }
    else if(mouseIsPressed === true && currentShape === "square") {
      stroke(colorPicker.color());
      fill(colorPicker.color());
      rect(mouseX, mouseY, 50, 50);
    }
    else if(mouseIsPressed === true && currentShape === "rectangle") {
      stroke(colorPicker.color());
      fill(colorPicker.color());
      rect(mouseX, mouseY, 50, 100);
    }
  }

  function drawLine() {
    currentShape = "line";
  }

  function drawCircle() {
    currentShape = "circle"; 
  }

  function drawSquare() {
    currentShape = "square";
  }

  function drawRectangle() {
    currentShape = "rectangle";
  }

