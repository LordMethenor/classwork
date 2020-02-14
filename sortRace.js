function Piece (array) {
  this.array = array;
  this.partition = this.array.pop();
  this.part1 = [];
  this.part2 = [];
  this.array.forEach(function(value){
    if (value < this.partition){
      this.part1.push(value);
    }else{
      this.part2.push(value);
    }
  },this);
  if (this.part1.length > 1) {
    this.piece1 = new Piece(this.part1);
    this.segment1 = this.piece1.retPiece();
  }else{
    this.segment1 = this.part1;
  }
  if (this.part2.length > 1) {
    this.piece2 = new Piece(this.part2);
    this.segment3 = this.piece2.retPiece();
  }else{
    this.segment3 = this.part2;
  }
  this.retPiece = function(){
    temp = this.segment1.concat([this.partition],this.segment3);
    return temp;
  };
}
function quickSort (array) {
  arr = array.slice(0);
  master = new Piece(arr);
  return master.retPiece();
}
function bubbleSort (arr) {
  var temp;
  for (var i = arr.length; i > 0; i--)  {
    for(var j = 0; j < i; j++)  {
      if(arr[j] > arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
test = Array.from({length: 10000}, () => Math.floor(Math.random() * 100));
console.time('default');
test.sort(function(x,y){return x-y});
//console.log(test.sort(function(x,y){return x-y}));
console.timeEnd('default');
console.time('quickSort');
quickSort(test);
//console.log(quickSort(test));
console.timeEnd('quickSort');
console.time('bubble');
bubbleSort(test)
//console.log(bubbleSort(test));
console.timeEnd('bubble');