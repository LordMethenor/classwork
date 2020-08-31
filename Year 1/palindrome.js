function main (INPUT) {
  OUTPUT = findPalindrome(INPUT);
  if (OUTPUT === null) {
    console.log("No palindromes found.");
  }else{
    console.log(OUTPUT);
  }
  
}
function FindLargestPalindrome (POS1, POS2, LIST) {
  this.STR1 = '';
  this.LIST = LIST;
  this.POS1 = POS1;
  this.POS2 = POS2;
  for (var _i = 1; _i < this.POS1+1; _i++) {
    if (this.LIST[this.POS1 - _i] == this.LIST[this.POS1 + _i]) {
      this.STR1 = this.STR1 + this.LIST[this.POS1 + _i];
    }else{
      break;
    }
  }
  this.STR2 = '';
  //check for +1
  for (var __i = 1; __i < this.LIST.length - this.POS2; __i++) {
    if (this.LIST[this.POS2 - __i] == this.LIST[this.POS2 + __i]) {
      this.STR2 = this.STR2 + this.LIST[this.POS2 + __i];
    }else{
      break;
    }
  }if (this.STR1.length > this.STR2.length) {
    this.LENGTH = this.STR1.length;
    this.x = 1;
  }else {
    this.LENGTH = this.STR2.length;
    this.x = 0;
  }
  this.retSTR = function () {
    if (this.LENGTH !== 0) {
      if (this.x === 0) {
        if (this.LENGTH == this.STR1.length){
          return this.LIST.slice(this.POS1 - this.LENGTH, this.POS1+this.LENGTH+1).join('') + ' \n' + this.LIST.slice(this.POS2 - this.LENGTH,this.POS2 + this.LENGTH+1).join('');
        }else{
          return this.LIST.slice(this.POS2 - this.LENGTH, this.POS2+this.LENGTH+1).join('');
        }
      }else{
        return this.LIST.slice(this.POS1 - this.LENGTH, this.POS1+this.LENGTH+1).join('');
      }
    }else{
      return null;
    }
  };
}
function findPalindrome (STRING) {
  ATTEMPTS = [];
  SUCCESS = [];
  s = -1;
  LIST = STRING.split('');
  HALF = Math.ceil(LIST.length/2);
  x = 0;
  if (LIST.length % 2 === 0) {
    LENGTH = LIST.slice(0, HALF).length;
    h = 0;
    OGLENGTH = LENGTH;
  }else{
    HALF = HALF-1;
    LENGTH = LIST.slice(0,HALF).length;
    OGLENGTH = LENGTH;
    c = ATTEMPTS.push(new FindLargestPalindrome(HALF, null, LIST))-1;
    a = LENGTH - ATTEMPTS[c].LENGTH;
    if (LENGTH > a) {
      LENGTH = a;
      s = SUCCESS.push(c) - 1;
    }
    LENGTH = LENGTH - ATTEMPTS[c].LENGTH;
    h = 1;
  }
  while (x < LENGTH) {
    c = ATTEMPTS.push(new FindLargestPalindrome(HALF-1-x, HALF+h+x, LIST)) - 1;
    x++;
    a = OGLENGTH - ATTEMPTS[c].LENGTH;
    if (LENGTH >= a) {
      LENGTH = a;
      s = SUCCESS.push(c) - 1;
    }
  }
  HIGH = 1;
  OUTPUT = '';
  for (var i = s; i > -1; i--) {
    NEW = ATTEMPTS[SUCCESS[i]].LENGTH;
    if(NEW >= HIGH){
      HIGH = NEW;
      OUTPUT = OUTPUT + ATTEMPTS[SUCCESS[i]].retSTR() + ' \n';
    }else{
      break;
    }
  }
  if (OUTPUT === '') {
    OUTPUT = null;
  }else{
    OUTPUT = OUTPUT.substring(0, OUTPUT.length - 2);
  }
  return OUTPUT;
}
main('iGattiNonAvevanoCugini');