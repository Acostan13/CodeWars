function iqTest(numbers){
  let arr = numbers.split(' ').map(Number);
  let even = arr.filter(num => num%2 === 0);
  let odd = arr.filter(num => num%2);
    if(even.length > odd.length) {
       return arr.indexOf(odd[0]) + 1;
     }
    else {
    return arr.indexOf(even[0]) + 1;
    }
}