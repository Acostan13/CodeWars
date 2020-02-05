function squareDigits (num) {
  let x = num.toString().split('').map(Number);
  for(i=0; i<x.length; i++){
    x[i] = x[i]* x[i];
  }
  return Number(x.join(''));
}