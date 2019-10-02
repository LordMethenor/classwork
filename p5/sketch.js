//if loop, multiple conditions (&&), variables, and interactivity
xList = []
oldPixels = []
timePixels = []
over = false
function setup(){
  createCanvas(400, 400);
  starting = true;
  frameRate(100);
  background('#fff')
  loadPixels();
  for (var i = 0; i < pixels.length; i = i + 4) {
    timePixels[i] = 0;
  }
}
function draw(){
  if(over == true){
    var score = xList.length;
    var restartText = "The game is over. Your score is " + score + ".";
    alert(restartText);
    noLoop()
  }else{
    strokeWeight(3);
    stroke('rgba(10,10,10,.75)');
    loadPixels();
    for (var i = 0; i < pixels.length; i = i + 4) {
      oldPixels[i] = pixels[i];
    }
    var i;
    xList[xList.length] = mouseX;
  
    newpointX = mouseX;
    newpointY = mouseY;
    if(starting == true){
      lastpointX = newpointX;
      lastpointY = newpointY;
      starting = false;
    }
    line(lastpointX, lastpointY, newpointX, newpointY);
    lastpointX = newpointX;
    lastpointY = newpointY;
  
    loadPixels();
    for (var i = 0; i < pixels.length; i = i + 4) {
      if (pixels[i] !== oldPixels[i]) {
        if (timePixels[i] == 0) {
          timePixels[i] = new Date();
        }else{
          var endTime = new Date();
          print(endTime);
          print(timePixels[i]);
          var timeDiff = endTime - timePixels[i];
          timeDiff /= 1000;
          print(timeDiff);
          if (timeDiff >= .5) {
            over = true;
            i = i + pixels.length;
          }
        }
      }
    }
  }
    
}
