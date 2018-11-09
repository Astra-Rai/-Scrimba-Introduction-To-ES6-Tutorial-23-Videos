//Rest Operator
//when you write a func and don't know how many values will be inputed and you don't just want to use an array, you can use the rest operator
//using rest operator is often more intuitive than converting the arguments to an array to get values 
function add(...nums) {
    
    console.log(nums);
}

add(4, 5, 7, 8, 12);
//output [4, 5, 7, 8, 12]
/*
//arguments notes

arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

syntax: arguments

description: The arguments object is a local variable available within all non-arrow functions. You can refer to a function's arguments inside that function by using its arguments object. It has entries for each argument the function was called with, with the first entry's index at 0.


function add(nums) {
    
    console.log(arguments);
}

add(4, 5, 7, 8, 12)

function add(nums) {
    
    console.log(arguments);
}

add(4, 5, 7, 8, 12);


//Output

[object Arguments] {
0: 4,
1: 5,
2: 7,
3: 8,
4: 12
}

*/