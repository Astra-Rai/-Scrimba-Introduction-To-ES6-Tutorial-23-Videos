//Challenge
//For a For Of Loop, what is outcome of trying to add to values while interating through an interval/array

let incomes = [62000, 67000, 75000];

for (let income of incomes){

  income += 5000;  
} 

console.log(incomes);

//notice none of values changed
//you cannot you let to set up/update values of interable ojects