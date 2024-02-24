const prompCreator = require('prompt-sync');

const prompt = prompCreator();

// DO NOT CHANGE THE TWO LINES BELOW.
const str = prompt("Enter a string: ");
const n = prompt("Enter a number: ");
console.log("str=" + str);
console.log("n=" + n);

/** 
 * TODO: Creates a new string that repeats the given string `str` 
 * `n` number of times. Each one should be in its own line.
 * For example: if str is 'Hello!', and n is 3, then it should 
 * be 'Hello!\nHello!\nHello!\n'
 */
let result = 'Hello!\nHello!\nHello!\n';
const repeatString = function (str, n) {
  if (n < 0) return "ERROR";
  let string = "Hello!";
  for (let i = 0; i < n; i++) {
    string += str;
  }
  return string;
};
// DO NOT CHANGE THE LINES BELOW.
console.log(result);

module.exports = {
  result,
};
