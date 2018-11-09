
//spread operator 


let example1 = [1,2,3,4,5,6];

//unwraping of values of example 1 in example2
//not passing values by reference
let example2 = [...example1];
console.log(example2);//expected output: [1,2,3,4,5,6]