function namesSorter (departmentsArray) {

  let arr = departmentsArray.reduce((a, b) => a.concat(b), []);
  arr.sort(function(a, b) {
    return a.length - b.length || // sort by length, if equal then
          a.localeCompare(b);    // sort by dictionary order
  });
  return arr;
}
