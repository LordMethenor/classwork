try {
  function read(input){
    this.list = input
    this.ans = []
    this.ops = ["+","*","/","^","(",")",'-']
    this.nums = ["0","1","2","3","4","5","6","7","8","9",'.','_']
    this.both = [].concat(this.ops,this.nums)
    for (var i = 0; i < this.list.length; i++) {
      verified = false
      for (var j = 0; j < this.both.length; j++) {
        if (this.list[i] == this.both[j]) {
          verified = true;
          if (this.list[i] == '-') {
            nverify = false
            if (i == 0) {
            }else{
              for (var i2 = 0; i2 < this.nums.length; i2++) {
                if (this.list[i-1] == this.nums[i2]) {
                  nverify = true;
                }
              }
            }if (nverify == false) {
              this.list.splice(i,1)
              this.list = insert(this.list, ['_','1','*'],i)
            }
          }
          //fix if - comes after number
        }
      }
      if (verified === false) {
        this.list.splice(i,1);
        i = i-1
      }
    }for (var i = 0; i < this.list.length; i++) {
      if (this.list[i] == '(') {
        this.parenthesis = [];
        this.temp = this.list;
        var a = 1
        var b = 0
        t = i
        while (a-b > 0) {
          t++
          if (this.list[t] == ')') {
            b++
          }else if (this.list[t] == '(') {
            a++
          }
        }
        this.ans[this.ans.length] = new initialize(this.list.splice(i+1,(t-i)-1));
        this.list.splice(i,2)
        this.retval = this.ans[this.ans.length-1].retlist();
        this.list = insert(this.list,this.retval,i)
      }
    }for (var i = 0; i < this.list.length; i++) {
      if (this.list[i] == '^') {
        this.ans[this.ans.length] = new math(this.list, i, this.list[i],this.nums)
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
      return this.list;
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
          }
        }
      }
    }
    this.val1 = parseFloat(ntchk(this.num1,0).join(""));
    this.val2 = parseFloat(ntchk(this.num2,0).join(""));
    if (this.op == '^') {
      this.temp = this.val1 ** this.val2
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
    for (var k = 0; k < this.ans.length; k++) {
      if (this.ans[k] == 'e') {
        throw "failure: out of range"
        break
      }
    }
    this.ans = ntchk(this.ans, 1)
    this.list.splice(this.i,1+this.num1.length+this.num2.length);
    this.list = insert(this.list, this.ans, this.i)
    this.retval = function()  {
      return this.ans;
    }
    this.repval = function()  {
      return this.list;
    }
    this.reti = function()  {
      return this.i;
    }
  }
  function initialize(input){
    this.input = input;
    this.read = new read(this.input);
    this.list = this.read.retval();
    this.retval = function()  {
      this.list = ntchk(this.list,0);
      this.answer = parseFloat(parseFloat(this.list.join("")).toFixed(10).toString());
      return this.answer;
    }
    this.retlist = function() {
      return this.list;
    }
  }
  function ntchk(list,dir){
    dir = dir;
    list = list
    if (list[0] == '_' && dir == 0) {
      list[0] = '-'
    }else if (list[0] == '-' && dir == 1) {
      list[0] = '_'
    }
    return list
  }
  function insert(base,insert,pos)  {
    temp = base.splice(0,pos)
    temp = [].concat(temp,insert);
    return [].concat(temp,base)
  }

  input = prompt("Enter your expression: ").split("");
  master = new initialize(input);
  alert("Answer: "+master.retval());
} catch (e) {
    alert(e)
}
