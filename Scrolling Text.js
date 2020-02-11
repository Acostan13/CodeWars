// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

// Good luck!


scrollingText = (text) => {
  let textUpper = text.toUpperCase();
  return [...textUpper].map((a, i) => textUpper.slice(i) + textUpper.slice(0, i));
}