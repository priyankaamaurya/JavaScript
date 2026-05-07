//? Promises

//! 1. Basic Promise

let p = new Promise((resolve, reject) => {
    resolve("Success");
});

p.then(res => console.log(res))