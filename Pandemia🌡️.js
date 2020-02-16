function infected(s) {
    //declaring global variables
    let total =0; //total countries
    let infected=0; //total countries infected
    let arr = []; // array of countries and oceans 
    let percentage = 0; //percentage of countries infected
             
    let splitString = s.split("X"); // splits string into array of continents
  
    for(i=0;i<s.length; i++){ // pushes countries and oceans into an array
        arr.push(s[i])
    }
    for(m=0;m<arr.length;m++){ // adds to the total counter of the number of countries
      if(arr[m]==="0" || arr[m]==="1"){
        total++;
      }
    }
    for(j=0;j<splitString.length;j++){ // adds to the infected counter the number of infected countries
      if(splitString[j].includes("1")){
        infected += splitString[j].length
      }
    }
  
    percentage = 100*(infected/total) // calculates percentage of infected countries
    if (isNaN(percentage)) percentage = 0; // converts NaN into 0
  
  return percentage;

}

//Tests
infected("01000000X000X011X0X");
infected("01X000X010X011XX");
infected("000000010");
infected("XXXXX");
infected("X00X000000X10X0100");
