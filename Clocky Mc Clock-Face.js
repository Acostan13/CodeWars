// Story
// Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

// Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

// What a bunch of cheapskates!

// Can you do it?

// Kata
// Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

//answer
whatTimeIsIt = (angle) => {
  let hour=Math.floor(angle/30) // converts clock angle to hour
  if (hour===0) hour=12 // sets hour to 12 if the angle is 0
  let minute=Math.floor(angle%30*2) // converts clock angle's remainder to minutes
  let totalHours = ('0'+String(hour)).slice(-2); // slices last two elements of the total hours
  let totalMinutes = ('0'+String(minute)).slice(-2); // slices last two elements of the total minutes
  return `${totalHours}:${totalMinutes}`; // returns total hours and minutes
}
