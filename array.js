function Linked_Array()  {

  this.array = []
  this.order = []
  this.initArray = function(array)  {
    this.array = array
    for (var i = 0; i < length(this.array); i++) {
      this.order[i] = i-1
    }
  }
  this.insertVal = function(val, loc) {
    pos = this.getPos(loc)
    this.array.append(val)
    this.order[length(this.array)-1] = this.order[pos]
    this.order[pos] = length(this.array)-1
  }
  this.deleteVal = function(loc)  {

  }
  this.getPos = function(loc)  {
    x = -1
    for (var a = 0, a < loc+1, a++){
      b = 0
      while (this.order[b] != x) {
        b++
      }
      x = b
      this.array[b]
    }
    return(x)
  }
  this.unlink = function(){
    this.getPos(length(this.array))
  }
  this.getArray
  this.subArray
  this.length
}
