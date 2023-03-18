var colorPicker;
var currentColor;
var currentShape;

function setup() {
    let canvas = createCanvas(windowWidth-150, windowHeight);
    background(205);
    colorPicker = createColorPicker("blue");
    colorPicker.position(windowWidth-100, 250); 
    
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
    saveButton.position(windowWidth-100, 325);
    saveButton.mousePressed(saveImage);

    clearButton = createButton("clear");
    clearButton.position(windowWidth-100, 350);
    clearButton.mousePressed(clearCanvas);

    sizeChanger = createSlider(5, 100, 0);
    sizeChanger.position(windowWidth-100, 300);
    sizeChanger.style('width', '80px');

    eraseButton = createButton("Erase");
    eraseButton.position(windowWidth-100, 375);
    eraseButton.mousePressed(eraseMistakes);
    
    gridButton = createButton("Show Grid");
    gridButton.position(windowWidth-100, 425);
    gridButton.mousePressed(showGrid);

    removeGridButton = createButton("Remove Grid");
    removeGridButton.position(windowWidth-100, 450);
    removeGridButton.mousePressed(removeGrid);
  }
  
  function draw() {
  }

  function saveImage() {
    save("Mycanvas.jpg");
  }

  function clearCanvas(){
    clear();
    background(205);
  }

  function eraseMistakes(){
    currentShape = "erase";
  }

  function showGrid(){
    if(mouseIsPressed === true){
      grid();
    }
  }

  function removeGrid(){
    if(mouseIsPressed === true){
      erase();
      grid();
      noErase();
    }
  }

  function grid() {
    for (var x = 0; x < windowWidth; x += windowWidth / 20) {
      for (var y = 0; y < windowHeight; y += windowHeight / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, windowHeight);
        line(0, y, windowWidth, y);
      }
    }
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
      ellipse(mouseX, mouseY, sizeChanger.value());
    }
    else if(mouseIsPressed === true && currentShape === "square") {
      stroke(colorPicker.color());
      fill(colorPicker.color());
      rect(mouseX, mouseY, sizeChanger.value(), sizeChanger.value());
    }
    else if(mouseIsPressed === true && currentShape === "rectangle") {
      stroke(colorPicker.color());
      fill(colorPicker.color());
      rect(mouseX, mouseY, sizeChanger.value(), 100);
    }
    if(mouseIsPressed === true && currentShape === "erase") {
      stroke(205);
      strokeWeight(sizeChanger.value());
      line(mouseX, mouseY, pmouseX, pmouseY);
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
