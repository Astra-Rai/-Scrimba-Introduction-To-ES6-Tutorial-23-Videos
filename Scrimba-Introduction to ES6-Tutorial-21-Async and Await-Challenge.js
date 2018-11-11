//use async and await

function resolveAfter3Seconds() {
  //return a new function, resolve, data we pass back
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 3000);
  });
}

/*
//call function, call promise.then that takes in return dada, console.log to fire off after three sync

resolveAfter3Seconds().then((data) => {
  console.log(data);
*/
//alternative way to solve challenge
async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}

getAsyncData();