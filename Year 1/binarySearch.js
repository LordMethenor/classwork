function binarySearch (sortedArray, target) {
  range = sortedArray.length;
  base = 0;
  max = sortedArray.length;
  while (range !== 0) {
    index = Math.floor((range)/2) + base
    if (target == sortedArray[index]) {
      return index;
    }else if (target > sortedArray[index]) {
      base = index + 1;
    }else {
      max = index;
    }
    range = max-base;
  }
  return -1
}