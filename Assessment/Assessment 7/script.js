//? Promises

//! 1. Basic Promise

// let p = new Promise((resolve, reject) => {
//     resolve("Success");
// });

// p.then(res => console.log(res))

//! 2. Reject Case

// let p = new Promise((resolve, reject) => {
//     reject("Rejected");
// })

// p
// .then(res => console.log(res))
// .catch(err => console.log(err))

//! 3. Promise Chain

// Promise.resolve(5)
// .then(x => x * 2)
// .then(x => x + 5)
// .then(console.log);

//! 4. Tricky Chain

// Promise.resolve(5)
// .then(x => {
//     console.log(x)
// })

// .then(x => console.log(x))

//! 5. Error Handling

// Promise.resolve()
//     .then(() => {
//         throw new Error ("Fail");
//     })
//     .catch(err => console.log(err.message));

//! 6. Finally Block

// Promise.resolve("Done")
// .finally(() => console.log("Finally"))
// .then(res => console.log(res))
