//export and import

//allow us to create more modular code
//useful for when you have a data to uee for more than one application

//example.js file
//export allows us to import this data in another application
export const data = [1,2,3];


//import.js file

import ( data ) from 'example.js';
//console.log(data);//output [1,2,3]
let updateData = data;
data.push(5)
console.log(data);