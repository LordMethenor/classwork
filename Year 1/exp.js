function add(x,y){
  oldX = x;
  for(var _i = 1; _i < y; _i++) {
    midX = x;
    for(var __i = 1; __i < oldX; __i++) {
      x = x+midX;
    }
  }
  return x;
}
function mult(x,y){
  oldX = x;
  for(var i = 1; i < y; i++) {
    x = x*oldX;
  }
  return x;
}
function exp(x,y){
  return Math.pow(x,y);
}
x=10;
y=4;
reps = 10000000;
console.time('add');
for(var i = 0; i<reps;i++) {
  add(x,y);
}
console.timeEnd('add');
console.time('mult');
for(var i = 0; i<reps;i++) {
  mult(x,y);
}
console.timeEnd('mult');
console.time('exp');
for(var i = 0; i<reps;i++) {
  exp(x,y);
}
console.timeEnd('exp');