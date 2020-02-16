## Pandemia


**Description:**

⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. Each continent is isolated from each other but infected people have spread before the warning. ⚠️

🗺️ You would be given a map of the world in a type of string:

```
s = "01000000X000X011X0X"

"0" : uninfected

"1" : infected

"X" : ocean
```

⚫ The virus can't spread in the other side of the ocean.

⚫ If one person is infected every person in this continent gets infected too.

⚫ Your task is to find the percentage of human population that got infected in the end.

☑️ Return the percentage % of the total population that got infected.

❗❗ The first and the last continent are not connected!


💡 **Example:**

```
start: map1 = "01000000X000X011X0X"
end:   map1 = "11111111X000X111X0X"
total = 15
infected = 11
percentage = 100*11/15 = 73.33333333333333
```

➕ For maps without oceans "X" the whole world is connected.

➕ For maps without "0" and "1" return 0 as there is no population.


### Solution


infected = (s) => {
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
infected("01000000X000X011X0X")
infected("01X000X010X011XX")
infected("000000010")
infected("XXXXX")
infected("X00X000000X10X0100")
