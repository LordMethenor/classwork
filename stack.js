function Stack() {
  this.index = [];
  this.length = 0;
  this.peek = function () {
    if (this.length == 0) {
      return "Command failed: stack is empty."
    }
    return this.index[this.length-1];
  };
  this.pop = function () {
    if (this.length == 0) {
      return "Command failed: stack is empty."
    }
    this.length--;
    return this.index[this.length];
  };
  this.push = function (val) {
    //if you push nothing, you add 'undefined/placeholder to the stack'
    this.index[this.length] = val;
    this.length ++;
    return this.length
  };
  this.count = function () {
    return this.length;
  }
}
