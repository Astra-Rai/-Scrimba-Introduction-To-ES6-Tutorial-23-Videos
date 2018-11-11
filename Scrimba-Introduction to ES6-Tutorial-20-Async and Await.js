



const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
//tested, api should work
//async, lets javascript know this an async function
async function getTop100Campers() {
  //await, please wait until the fetch completes
    const response = await fetch(apiUrl);
  //please await reponse being turn into response.json 
    const json = await response.json();
    
    console.log(json[0]);
}

// function getTop100Campers() {
//     fetch(apiUrl)
//     .then((r) => r.json())
//     .then((json) => {
//         console.log(json[0])
//     }).catch((error) =>{
//         console.log('failed');
//     });
// }

getTop100Campers();



//promises, async and await
//fails, error with URL
//
//const that is a URL, to link to top 100, all-time active users on free code camp

//example 1, server get calls

/*
const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
function getTop100Campers() {
    
  //takes in a URL to get the data we are looking from 
    fetch(apiUrl)//fetch returns a promise
  //when promise is delivered, with fetch, i'll do something with it, in the meantime, keep running your code
  //r, response, convert promise to json 
    .then((r) => r.json())
  //we can do something with converted data
    .then((json) => {
      //we cansole first value of json, output is object of json call
        console.log(json[0])
      //if their is a failure on server side, we will get error
    }).catch((error) =>{
        console.log('failed');
    });
}

getTop100Campers();

*/