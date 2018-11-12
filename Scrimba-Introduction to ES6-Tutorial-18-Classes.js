//notes and code not finishe
//this is index.js file, were are importing class Animal code
import { Animal } from './animal.js';

let cat = new Animal('Cat', 4);

console.log(cat.legs)



//this is the animal.js file
export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

}

//notes on static written
//static method
//get method