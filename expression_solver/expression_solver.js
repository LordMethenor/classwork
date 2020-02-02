function Read (input) {
  this.list = input;
  this.ans = [];
  this.ops = ['+', '*', '/', '^', '(', ')', '-'];
  this.nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '_'];
  this.both = [].concat(this.ops, this.nums);
  for (var i = 0; i < this.list.length; i++) {
    if (Arraycheck(this.list[i], this.both) === true) {
      if (this.list[i] === '-') {
        if (Arraycheck(this.list[i - 1], this.nums) === false) {
          this.list.splice(i, 1);
          this.list = Insert(this.list, ['_', '1', '*'], i);
        }
      } else if (this.list[i] === '(') {
        if (Arraycheck(this.list[i - 1], this.nums) === true) {
          this.list = Insert(this.list, ['*'], i);
        }
      } else if (this.list[i] === ')') {
        if (Arraycheck(this.list[i + 1], this.nums) === true) {
          this.list = Insert(this.list, ['*'], i + 1);
        }
      }
    } else {
      this.list.splice(i, 1);
      i = i - 1;
    }
  }

  for (i = 0; i < this.list.length; i++) {
    if (this.list[i] === '(') {
      this.parenthesis = [];
      this.temp = this.list;
      var a = 1;
      var b = 0;
      var t = i;
      while (a - b > 0) {
        t++;
        if (this.list[t] === ')') {
          b++;
        } else if (this.list[t] === '(') {
          a++;
        }
      }

      this.ans[this.ans.length] = new Initialize(this.list.splice(i + 1, (t - i) - 1));
      this.list.splice(i, 2);
      this.retval = this.ans[this.ans.length - 1].retlist();
      this.list = Insert(this.list, this.retval, i);
    }
  }
  for (i = 0; i < this.list.length; i++) {
    if (this.list[i] === '^') {
      this.ans[this.ans.length] = new Operation(this.list, i, this.list[i], this.nums);
      this.list = this.ans[this.ans.length - 1].repval();
      i = this.ans[this.ans.length - 1].reti();
    }
  } for (i = 0; i < this.list.length; i++) {
    if (this.list[i] === '*' | this.list[i] === '/') {
      this.ans[this.ans.length] = new Operation(this.list, i, this.list[i], this.nums);
      this.list = this.ans[this.ans.length - 1].repval();
      i = this.ans[this.ans.length - 1].reti();
    }
  } for (i = 0; i < this.list.length; i++) {
    if (this.list[i] === '+' | this.list[i] === '-') {
      this.ans[this.ans.length] = new Operation(this.list, i, this.list[i], this.nums);
      this.list = this.ans[this.ans.length - 1].repval();
      i = this.ans[this.ans.length - 1].reti();
    }
  }

  this.retval = function () {
    return this.list;
  };
}

function Operation (list, i, op, nums) {
  this.list = list;
  this.num1 = [];
  this.num2 = [];
  this.op = op;
  this.nums = nums;
  var cont = true;
  var r = i - 1;
  while (cont === true) {
    cont = false;
    this.num1[this.num1.length] = this.list[r];
    r = r - 1;
    if (r === -1) {
      cont = false;
    } else {
      for (var s = 0; s < this.nums.length; s++) {
        if (this.list[r] === this.nums[s]) {
          cont = true;
        }
      }
    }
  }
  this.num1 = this.num1.reverse();
  this.i = i - this.num1.length;
  cont = true;
  r = i + 1;
  while (cont === true) {
    cont = false;
    this.num2[this.num2.length] = this.list[r];
    r = r + 1;
    if (r === this.list.length) {
      cont = false;
    } else {
      for (s = 0; s < this.nums.length; s++) {
        if (this.list[r] === this.nums[s]) {
          cont = true;
        }
      }
    }
  }
  this.val1 = parseFloat(Ntchk(this.num1, 0).join(''));
  this.val2 = parseFloat(Ntchk(this.num2, 0).join(''));
  if (this.op === '^') {
    this.temp = this.val1 ** this.val2;
  } else if (this.op === '*') {
    this.temp = this.val1 * this.val2;
  } else if (this.op === '/') {
    this.temp = this.val1 / this.val2;
  } else if (this.op === '+') {
    this.temp = this.val1 + this.val2;
  } else if (this.op === '-') {
    this.temp = this.val1 - this.val2;
  }
  this.ans = this.temp.toString().split('');
  if (Arraycheck('e', this.ans) === true) {
    throw new Error('failure: out of range');
  }
  this.ans = Ntchk(this.ans, 1);
  this.list.splice(this.i, 1 + this.num1.length + this.num2.length);
  this.list = Insert(this.list, this.ans, this.i);
  this.retval = function () {
    return this.ans;
  };
  this.repval = function () {
    return this.list;
  };
  this.reti = function () {
    return this.i;
  };
}
function Initialize (input) {
  this.input = input;
  this.read = new Read(this.input);
  this.list = this.read.retval();
  this.retval = function () {
    this.list = Ntchk(this.list, 0);
    this.answer = parseFloat(parseFloat(this.list.join('')).toFixed(10).toString());
    return this.answer;
  };
  this.retlist = function () {
    return this.list;
  };
}
function Ntchk (list, dir) {
  if (list[0] === '_' && dir === 0) {
    list[0] = '-';
  } else if (list[0] === '-' && dir === 1) {
    list[0] = '_';
  }
  return list;
}
function Insert (base, ins, pos) {
  var temp = base.splice(0, pos);
  temp = [].concat(temp, ins);
  return [].concat(temp, base);
}
function Arraycheck (val, inarray) {
  var found = false;
  for (var i = 0; i < inarray.length; i++) {
    if (inarray[i] === val) {
      found = true;
      break;
    }
  }
  return found;
}
function getOutput (text) {
  alert(text);
}
function getInput (text) {
  return prompt(text);
}
function Execute () {
  var input = getInput('Enter your expression: ').split('');
  var master = new Initialize(input);
  getOutput('Answer: ' + master.retval());
}
try {
  Execute();
} catch (e) {
  getOutput(e);
  getOutput(e.stack);
}
