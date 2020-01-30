function read(input){
  this.ans = []
  this.list = input.split("");
  for (var i = 0; i < this.list.length; i++) {
    this.ops = ["+","-","*","/","^","(",")","1","2","3","4","5","6","7","8","9",'_']
    this.nums = ["1","2","3","4","5","6","7","8","9",'_']
    verified = false
    for (var j = 0; j < this.ops.length; j++) {
      if (this.list[i] == this.ops[j]) {
        verified = true;
        break;
      }
    }
    if (verified = false){
      this.list.splice(i,1);
      i = i-1
    }else if (this.list[i] == '(') {
      this.parenthesis = [];
      this.temp = this.list;
      this.ans[this.ans.length] = new initialize(this.list.splice(i+1,this.list.length-1));
      this.list.length = i;
      this.retval = this.ans[this.ans.length-1].retval;
      this.list = [].concat(this.list, this.retval);

    }else if (this.list[i] == ')')  {
      this.parenthesis = [];
      this.ans[this.ans.length] = new initialize(this.list.splice(0,this.list[i]))
      this.list.splice(0,1)
      this.retval = this.ans[this.ans.length-1].retval;
      this.contval = this.retval.length-1
      this.list = [].concat(this.retval, this.list);
      i = this.contval
    }else if (this.list[i] == '^') {
      this.num1 = []
      this.num2 = []
      cont = true
      r = i-1
      while (cont == true) {
        cont = false
        this.num1[this.num1.length] = this.list[r]
        r = r-1
        if  (r == -1) {
          cont = false;
        }else {
          for (var s = 0; s < this.nums.length; s++) {
            if (this.list[r] == this.nums[s]) {
              cont = true;
              break;
            }
          }
        }
      }
      this.num1 = this.num1.reverse
      cont = false
      r = i+1
      while (cont == true) {
        cont = false
        this.num2[this.num2.length] = this.list[r]
        r = r+1
        if  (r == this.list.length) {
          cont = false;
        }else {
          for (var s = 0; s < this.nums.length; s++) {
            if (this.list[r] == this.nums[s]) {
              cont = true;
              break;
            }
          }
        }
      }
      this.ans[this.ans.length] = this.num1 ^ this.num2
      
    }
  }

}
function initialize(input){
  this.input = input;

    }
  }
}