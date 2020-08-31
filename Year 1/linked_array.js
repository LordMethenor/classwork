function Linked_Array()  {

  this.array = [];
  this.order = [];
  this.initArray = function(array)  {
    this.array = array;
    for (var i = 0; i < length(this.array); i++) {
      this.order[i] = i-1;
    }
  };
  this.insertVal = function(val, loc) {
    pos = this.getPos(loc)[0];
    this.array[length(this.array)] = val;
    this.order[length(this.array)-1] = this.order[pos];
    this.order[pos] = length(this.array)-1;
  };
  this.deleteVal = function(loc)  {
    pos = this.getPos(loc)[0];
    this.array.append
  };
  this.getPos = function(loc) {
    x = -1;
    posList = []
    for (i = 0; i < loc+1; i++) {
      b = 0;
      while (this.order[b] != x) {
        b++;
      }
      x = b;
      posList[length(posList)] = this.array[b];
    };
    return([x, posList]);
  }
  this.unlink = function(){
    return(this.getPos(length(this.array))[1]);

  };
//  this.getArray;
//  this.subArray;
};
