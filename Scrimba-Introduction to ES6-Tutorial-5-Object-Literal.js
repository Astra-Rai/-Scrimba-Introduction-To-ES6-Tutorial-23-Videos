//Object Literals
//if keys are set to value passing in, assigns value of city to city and state to state
//example 1

/*function addressMaker(city, state){

    const newAddress = {newCity: city, newState :state};
    console.log(newAddress);
}
 addressMaker('Address', 'Texas');
 expected output: Object {newCity: "Address", newState: "Texas"}

*/
function addressMaker(city, state){
//value of city assigned to city
//value of state assigned to state
//newCity and newState omitted
    const newAddress = {city, state};
    console.log(newAddress);
}
 addressMaker('Address', 'Texas');