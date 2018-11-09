//Challenge
//Template Lieteral, Object Lieteral and Object Deconstructing
//Goal: to console log the new state, new city and the country

function addressMaker(address) {
 //create const to deconstructor object
  //pass in city and state, and set reference to address object that we are passing in
  //we don't need address.city or address.state anymore
  const {city, state} = address;
  
  
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States'
    };
        console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);

}
//fuction takes in a city state key in the object
addressMaker({city: 'Atlantis', state: 'Empire State of Mind'});

//starter code, use as a reference
/*function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States'
    };
}
addressMaker({city: 'Austin', state: 'Texas'});


*/