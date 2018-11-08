const personalInformation = {
    firstName: 'Astra', 
    lastName:'Rai',
    city: 'Nairobi',
    state: 'Compassion',
    zipCode:33
   
};
//first exercise

//const {firstName, lastName} = personalInformation;
//console.log(`${firstName} ${lastName}`);
//expected output "Astra Rai"


//second exercise, keys can be renamed and accessed›
const {firstName: fn, lastName: ln} = personalInformation;
console.log(`${fn} ${ln}`);