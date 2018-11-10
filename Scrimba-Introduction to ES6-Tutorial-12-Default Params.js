//For of Challenge
//For a For Of Loop, what is outcome of trying to add to values while interating through an interval/array

let incomes = [62000, 67000, 75000];
let total =0;
//iterate through values of array and add together
//use const because we're not resetting any values

for (const income of incomes){
//console.log(income);//62000, 67,000, 75,000, listed in console vertically
console.log(incomes) //output in console: [62000, 67000, 75000]
//console.log(income);//outputs, list format each element of array
total += income;  //interate through array and added vaule of each element: 62000, 67000,75000 = 
} 

console.log(total);//204000

//notice none of values changed
//you cannot you let to set up/update values of interable ojects