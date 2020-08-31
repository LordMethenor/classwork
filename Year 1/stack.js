function Stack() {
  index = [];
  this.length = 0;
  this.peek = function () {
    if (this.length === 0) {
      return "Command failed: stack is empty.";
    }
    return index[this.length-1];
  };
  this.pop = function () {
    if (this.length === 0) {
      return "Command failed: stack is empty.";
    }
    this.length--;
    return index[this.length];
  };
  this.push = function (val) {
    //if you push nothing, you add 'undefined/placeholder to the stack'
    index[this.length] = val;
    this.length ++;
    return this.length
  };
}
