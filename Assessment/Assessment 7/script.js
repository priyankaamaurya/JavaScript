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

//! 7. Promise.all

// let p1 = Promise.resolve(1);
// let p2 = Promise.resolve(2);

// Promise.all([p1, p2])
//   .then(res => console.log(res));

//! 8. setTimeout + Promise (Event Loop)

// console.log("Start")

// setTimeout(() => {
//     console.log("Timeout")
// }, 0)

// Promise.resolve().then(() => {
//     console.log("Promise")
// })

// console.log("End")

//! 9. Create a promise that resolves after 2 sec

function delay() {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve("Done after 2 sec");
        }, 2000)
    })
}

delay().then(console.log)