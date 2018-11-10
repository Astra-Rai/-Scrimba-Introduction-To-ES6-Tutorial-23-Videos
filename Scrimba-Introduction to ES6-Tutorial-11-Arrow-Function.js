function add(...nums) {
  //call reduce array method
   let total = nums.reduce((x, y) => x + y);
   
  console.log(total);  
}
add(4,5,6,7,12);




//old way, example below

//fuction add that takes in a numberous amount of valules
//using the rest operater,will get an array of the values

/*function add(...num) {
  //call reduce array method
   let total = nums.reduce(function (x, y){
     return x * y;
   });
 
    console.log(total);  
}
add(4,5,6,7,12);
                       
*/                           
//arrow function, doesn't have own instqnce of .this

//arorw funcitons eliminate unnecessary boilerplate of callback functions 
//reduce mdn link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


