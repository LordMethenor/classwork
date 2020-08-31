function Piece (array) {
  console.log(array);
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
//quickSort(array), output in console;