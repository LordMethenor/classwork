function fiveNumSum (data) {
  this.data = data;
  this.data.sort(function(a, b){return a-b});
  this.min = this.data[0];
  this.max = this.data[this.data.length-1];
  this.median = Median(data);
  this.h1 = this.data;
  this.h2 = []
  for (var i = 0; i < this.half; i++){
    this.h2.push(this.h1.pop());
    console.log(this.h1)
    console.log(this.h2)
  }
  this.h2.reverse();
  this.h1.length = this.h2.length
  console.log(this.h1);
  console.log(this.h2);
  this.q1 = Median(this.h1);
  this.q3 = Median(this.h2);
  this.IQR = this.q3-this.q1;
  
  function Median (sortedData) {
    this.medianIndex = sortedData.length/2;
    this.half = Math.floor(medianIndex)
    return (sortedData[Math.ceil(medianIndex-1)] + sortedData[half])/2;
  }
  return([this.min,this.q1,this.median,this.q3,this.max]);
}