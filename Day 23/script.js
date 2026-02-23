//? Timing Function in JS

//! 1. Set Timeout:
// console.log("Task 1")
// console.log("Task 2")

// for (let i=0; i<10000; i++){}

// console.log("Task 3")

//! using setTimeout

// console.log("Task 1")
// console.log("Task 2")

// setTimeout(()=>{
//     for (let i=0; i<10000; i++){}
//     console.log("Expensive Task Done")
// },3000)


// console.log("Task 3")

//! using clearTimeout

// console.log("Task 1")
// console.log("Task 2")

// let clrData = setTimeout(()=>{
//     console.log("Task 3")
// },3000)

// console.log("Task 4")

// let btn = document.querySelector("button")
// btn.addEventListener("click", ()=>{
//     console.log("Button is clicked")
//     clearTimeout(clrData)
// })

//! 2. Set Interval:

// let i=1
// let clrInterVal = setInterval(()=>{
//     console.log("Task 3", i)
//     i++
// }, 1000);

// let btn = document.querySelector("button")
// btn.addEventListener("click", ()=>{
//     console.log("Button is clicked")
//     clearInterval(clrInterVal)
// })


//? Promises

//! Creating a Promises

// let promise1 = new Promise((res, rej)=>{
// })
// console.log(promise1)

//! Resolved
// let promise2 = new Promise((res, rej)=>{
//     res("PROMISE IS FULFILLED")
// })
// console.log(promise2)

//! Rejected
// let promise3 = new Promise((res, rej)=>{
//     rej("PROMISE IS REJECTED")
// })
// console.log(promise3)

//! Resolved, Rejected
// let promise4 = new Promise((res, rej)=>{
//     res("PROMISE IS FULFILLED")
//     rej("PROMISE IS REJECTED")
// })
// console.log(promise4)

//? Methods of promises

//! Instance methods of Promises

//! 1. .then(): 
//! 2. .catch(): 
//! 3. .finally(): 

// let promise1 = new Promise((res, rej)=>{
//     res("PROMISE IS FULFILLED")
//        rej("PROMISE IS REJECTED")
// })
// console.log(promise1)

// promise1
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Execeuted Everytime")
// })