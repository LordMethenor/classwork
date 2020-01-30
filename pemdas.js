function read(input){
  this.ans = []
  this.list = input.split("");
  this.ops = ["+","-","*","/","^","(",")"]
  this.nums = ["1","2","3","4","5","6","7","8","9",'_','.']
  this.both = [].concat(this.ops,this.nums)
  for (var i = 0; i < this.list.length; i++) {
    verified = false
    for (var j = 0; j < this.both.length; j++) {
      if (this.list[i] == this.both[j]) {
        verified = true;
        break;
      }
    }
    if (verified = false){
      this.list.splice(i,1);
      i = i-1
    }
  }for (var i = 0; i < this.list.length; i++) {
    if (this.list[i] == '(') {
      this.parenthesis = [];
      this.temp = this.list;
      this.ans[this.ans.length] = new initialize(this.list.splice(i+1,this.list.length-1));
      this.list.length = i;
      this.retval = this.ans[this.ans.length-1].retlist();
      this.list = [].concat(this.list, this.retval);

    }else if (this.list[i] == ')')  {
      this.parenthesis = [];
      this.ans[this.ans.length] = new initialize(this.list.splice(0,this.list[i]))
      this.list.splice(0,1)
      this.retval = this.ans[this.ans.length-1].retlist();
      this.contval = this.retval.length-1
      this.list = [].concat(this.retval, this.list);
      i = this.contval
    }
  }for (var i = 0; i < this.list.length; i++) {
    if (this.list[i] == '^') {
      this.ans[this.ans.length] = new math(this.list, i, '^',this.nums)
      this.list = this.ans[this.ans.length-1].repval();
      i = this.ans[this.ans.length-1].reti();
    }
  }for (var i = 0; i < this.list.length; i++) {
    if (this.list[i] == '*' | this.list[i] == '/') {
      this.ans[this.ans.length] = new math(this.list, i, this.list[i],this.nums)
      this.list = this.ans[this.ans.length-1].repval();
      i = this.ans[this.ans.length-1].reti();
    }
  }for (var i = 0; i < this.list.length; i++) {
    if (this.list[i] == '+' | this.list[i] == '-') {
      this.ans[this.ans.length] = new math(this.list, i, this.list[i],this.nums)
      this.list = this.ans[this.ans.length-1].repval();
      i = this.ans[this.ans.length-1].reti();
    }
  }
  this.retval = function()  {
    return this.list
  }

}
function math(list, i, op, nums){
  this.list = list
  this.num1 = []
  this.num2 = []
  this.op = op
  this.nums = nums
  cont = true
  r = i-1
  while (cont === true) {
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
  this.num1 = this.num1.reverse();
  this.i = i-this.num1.length;
  cont = true
  r = i+1
  while (cont === true) {
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
  this.val1 = parseFloat(this.num1.join(""));
  this.val2 = parseFloat(this.num2.join(""));
  if (this.op == '^') {
    this.temp = this.val1 ^ this.val2
  }else if  (this.op == '*')  {
    this.temp = this.val1 * this.val2
  }else if  (this.op == '/')  {
    this.temp = this.val1 / this.val2
  }else if  (this.op == '+')  {
    this.temp = this.val1 + this.val2
  }else if  (this.op == '-')  {
    this.temp = this.val1 - this.val2
  }
  
  this.ans = this.temp.toString().split("");
  this.list.splice(this.i,1+this.num1.length+this.num2.length,this.ans);
  this.retval = function()  {
    return this.ans;
  }
  this.repval = function()  {
    return this.list;
  }
  this.reti = function()  {
    return this.i + this.ans.length;
  }
}
function initialize(input){
  this.input = input;
  this.read = new read(this.input);
  this.list = this.read.retval();
  this.answer = this.list.join("");
  alert(this.answer)
  this.retval = function()  {
    return this.answer;
  }
  this.retlist = function() {
    return this.list;
  }
}
function joinlist(list){
  list
}
input = prompt("Enter your expression: ");
master = new initialize(input);
alert("Answer: "+master.retval());