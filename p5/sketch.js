function setup(){
  createCanvas(400, 400);

}

function draw(){
  background("#eee");
  fill("#8c8c8c");
  strokeWeight(1);
  stroke("#000")
  //219 is 220/181 is 180
  quad(40, 340, 100, 380, 100, 141, 40, 40);
  quad(40,40,277,180,219,211,100,141)
  quad(40,40,40,100,100,141,277,180);
  noStroke();
  quad(40, 340, 100, 380, 100, 141, 40, 40);
  quad(40,40,277,180,219,211,100,141);
  stroke("#000");
  fill("#fff");
  quad(40, 40, 106, 11, 377, 180, 277, 180);
  quad(277,180, 377,180,159,292,159,242);
  quad(277,180,277,150,377,180,190,242);
  noStroke();
  quad(40, 40, 106, 11, 377, 180, 277, 180);
  quad(277,180, 377,180,159,292,159,242);
  stroke("#000");
  fill("#000");
  quad(100,380,159,292,159,176,100,142);
  quad(100,380,377,241,377,180,159,292)
}
