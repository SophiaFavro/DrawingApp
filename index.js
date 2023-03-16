var colorPicker;
var currentColor;
var currentShape;

function setup() {
    let canvas = createCanvas(windowWidth-150, windowHeight);
    background(205);
    colorPicker = createColorPicker("blue");
    colorPicker.position(windowWidth-100, 350); 
    
    lineButton = createButton("Line");
    lineButton.position(windowWidth-100, 200);
    lineButton.mousePressed(drawLine);

    circleButton = createButton("Circle");
    circleButton.position(windowWidth-100, 50);
    circleButton.mousePressed(drawCircle);

    squareButton = createButton("Square");
    squareButton.position(windowWidth-100, 100);
    squareButton.mousePressed(drawSquare);

    rectangleButton = createButton("Rectangle");
    rectangleButton.position(windowWidth-100, 150);
    rectangleButton.mousePressed(drawRectangle);

    saveButton = createButton("Save");
    saveButton.position(windowWidth-100, 425);
    saveButton.mousePressed(saveImage);

    clearButton = createButton("clear");
    clearButton.position(windowWidth-100, 450);
    clearButton.mousePressed(clearCanvas);

    sizeChanger = createSlider(5, 100, 0);
    sizeChanger.position(windowWidth-100, 400);

  }
  
  function draw() {
  }

  function saveImage() {
    save("Mycanvas.jpg");
  }

  function clearCanvas(){
    clear();
  }

  function mouseDragged() {
    if(mouseIsPressed === true && currentShape === "line") {
        stroke(colorPicker.color());
        strokeWeight(sizeChanger.value());
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

