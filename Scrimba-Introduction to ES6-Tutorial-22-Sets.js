
//sets allow us to create a unique list
//array, new Set has duplicate values 
const exampleSet = new Set([1,1,1,1,1,1,2,2,2,2]);

//exampleSet.add(5);
//console.log(exampleSet.size);//expectedoutput, 3

//console.log(exampleSet.size);//expected output is 2, since we have two unique values

//you can add more than one value to set at a time
exampleSet.add(5).add(17);
//console.log(exampleSet.size);//expected output, 4


//you can remove valuse from setusing 
//console.log(exampleSet.delete(2));//returns a boolean value, true, two was in set, and will be deleted
//console.log(exampleSet.size

//check if vaule is in set
//console.log(exampleSet.has(5));//expected output, true

//we cam clear out entire set with clear
exampleSet.clear();
console.log(exampleSet.size);//expected output, 0

//note, you can interate through a set
