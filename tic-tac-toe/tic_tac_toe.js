var x;
var board;
var turn;
var notTurn;
var invalid;
var win;
var tie;
var again;
var count;
function restart(state) {
  if (state == 'win') {
    again = confirm(turn.toUpperCase()+" has won! Play again?");
  }else{
    again = confirm("The game is a draw. Play again?");
  }
  if (again === true) {
    startup();
  }else{
    noLoop();
  }
}
function startup() {
  board = [
  ['','',''],
  ['','',''],
  ['','','']
  ];
  textAlign(CENTER,CENTER);
  textSize(x);
  turn = 'x';
  notTurn = 'o';
  invalid = false;
  win = false;
  tie = false;
  again = false;
  count = false;
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  if (windowWidth > windowHeight) {
    x = windowHeight / 5;
  }else {
    x = windowWidth / 5;
  }
  startup();
}

function draw() {
  background('white');
  textSize(0.25*x);
  text("Turn: "+turn.toUpperCase(), 2.5*x, 0.5*x);
  if (invalid === true) {
    text("Invalid move.", 2.5*x,4.5*x);
  }
  textSize(x);
  for (var i = 0; i < board.length; i++) {
    for (var _i = 0; _i < board[i].length; _i++) {
      square((_i+1) * x, (i+1) * x, x);
      text(board[i][_i], (_i + 1.5) * x, (i + 1.5) * x);
    }
  }
  if (win === true | tie === true) {
    if (count === true){
      if (win === true) {
        restart('win');
      }
      else if (tie === true) {
        restart('tie');
      }
    }else{
      count = true;
    }
  }
  
}
function mouseClicked () {
  if (win !== true && tie !== true) {
    _X = Math.floor(mouseX / x);
    _Y = Math.floor(mouseY / x);
    if (0 < _X && _X < 4 && 0 < _Y && _Y < 4 && board[_Y-1][_X-1] === '') {
      board[_Y-1][_X-1] = turn;
      textSize(x);
      invalid = false;
      victory = [
      [true,true,true],
      [true,true,true],
      [true,true]
      ];
      for (var h = 0; h < victory[0].length; h++) {
        for (var _h = 0; _h < board.length; _h++) {
          if (board[h][_h] != turn) {
            victory[0][h] = false;
          }
          if (board[_h][h] != turn) {
            victory[1][h] = false;
          }
        }
        if (victory[0][h] === true | victory[1][h] === true) {
          win = true;
          break;
        }
      }
      for (var d = 0; d < board.length; d++) {
        if (board[d][d] != turn) {
          victory[2][0] = false;
        }
        if (board[d][2-d] != turn) {
          victory[2][1] = false;
        }
      }
      if (victory[2][0] === true | victory[2][1] === true) {
        win = true;
      }if (win !== true) {
        tie = true;
        for (i = 0; i < board.length; i++) {
          for (var __i = 0; __i < board[i].length; __i++) {
            if (board[i][__i] === ''){
              tie = false;
              break;
            }
          }
        }
        if (tie !== true) {
          temp = notTurn;
          notTurn = turn;
          turn = temp;
        }
      }
  
    } else {
      invalid = true;
    }
  }
  
  
}
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
  if (windowWidth > windowHeight) {
    x = windowHeight / 5;
  }else {
    x = windowWidth / 5;
  }
  textSize(x);
}