oddOrEven = (array) => {
  // Reduces array and set's initial value to zero
  let reducedArray = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  // Ternary Operator which returns even or odd based on reduced array 
  return reducedArray % 2 == 0 ? 'even' : 'odd'
}
