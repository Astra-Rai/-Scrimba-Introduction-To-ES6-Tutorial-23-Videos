

//give us a way to add values to start of string or end, depending on how long the string is 

let example = 'Dylan';

console.log(example.padStart(10, 'a'));
//total characters 10, start string with 5 'a', and Dylan will follow
console.log(example.length);//Dylan is 5 characters
console.log(example.padEnd(10, 'a'));
//padEnd, 5 a's from end of string

/*
The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start (left) of the current string.

The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
*/