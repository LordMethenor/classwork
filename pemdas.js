function expression(input){
  this.
}
function read(input){
  this.list = input.split("");
  for (var i = 0; i < this.list.length; i++) {
    this.ops = ["+","-","*","/","^","(",")","1","2","3","4","5","6","7","8","9"]
    verified = false
    for (var j = 0; j < this.ops.length; j++) {
      if (this.list[i] == this.ops[j]) {
        verified = true
        break
      }
    }

    if (this.list[i] == '(') {
      var this.expression = new expression();
    }


  }

}
