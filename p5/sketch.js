//if loop, multiple conditions (&&), variables, and interactivity
var lastpontX;
var lastpointY;
var xList;
  xList = [];
var yList;
  yList = [];
var timeList;
  timeList = [];
function setup(){
  createCanvas(600, 400);
  starting = true;
}
function draw(){
  strokeWeight(5);
  print("passed1");
  xList[xList.length] = mouseX;
  yList[yList.length] = mouseY;
  timeList[timeList.length] = new Date();
  var i;
  endTime = new Date();
  print("passed2");
  for (var i = 0; i < xList.length; i++) {
    if (mouseX==xList[i] && mouseY==yList[i]) {
      var timeDiff = endTime - timeList[i];
      timeDiff /= 1000;
      if (timeDiff >= 500) {
        var restartText;
        restartText = "The game is over. Your score is  "xList.length".";
        alert(restartText);
        noLoop();
      }
    }
  }

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
}
