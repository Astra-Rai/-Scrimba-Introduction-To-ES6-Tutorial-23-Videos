//Template Literals

//Exercise 1 | Old way to concatenate string variables

let word1 = 'Dylan';
let word2 = 'Israel';

const fullNameExample1 = word1 + ' ' + word2;
//console.log(fullNameExample1);//expected output "Dylan Isreal"

//Example 2 | ES6, Use of Template Literals
//Template literals, back ticks ${variable name}
const  fullNameExample2 = `${word1} ${word2}`;
//console.log(fullNameExample2);

//Example 3
let num1 = 3;
let num2 = 2;

const sumNumbers = `${num1 + num2}`;
//console.log(sumNumbers);
//type of sumNumbers, string
//remember back ticks, indicate a string
//numbers are added, BUT data type is still string


//Multi Line Strings, old way
let example ='Hello \n' + 'world';
console.log(example);
document.getElementById('example').innerText = example;

//Multi Line Strings, ES6 
let anotherExample = `${word1}
${word2}`;