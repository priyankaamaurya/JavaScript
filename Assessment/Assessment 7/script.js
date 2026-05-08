//? Promises

//! 1. Basic Promise

// let p = new Promise((resolve, reject) => {
//     resolve("Success");
// });

// p.then(res => console.log(res))

//! 2. Reject Case

let p = new Promise((resolve, reject) => {
    reject("Rejected");
})

p
.then(res => console.log(res))
.catch(err => console.log(err))