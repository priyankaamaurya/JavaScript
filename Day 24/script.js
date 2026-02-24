//? Static methods of Promises

//! Promise.all() :

// let p1 = new Promise((res, rej)=>{
//     res("Promise 1 Completed")
// })

// let p2 = new Promise((res, rej)=>{
//     res("Promise 2 Completed")
// })

// let p3 = new Promise((res, rej)=>{
//     res("Promise 3 Completed")
// })

// let res = Promise.all([p1, p2, p3])

// res.then(()=>{
// console.log("Promise Resolved")
// }).catch(()=>{
// console.log("Promise Rejected")
// })

//! Promise.allSettled():

// let p1 = new Promise((res, rej)=>{
//     res("Promise 1 Completed")
// })

// let p2 = new Promise((res, rej)=>{
//     res("Promise 2 Completed")
// })

// let p3 = new Promise((res, rej)=>{
//     rej("Promise 3 Completed")
// })

// let res = Promise.allSettled([p1, p2, p3])

// res.then((result)=>{
// console.log(result)
// }).catch((err)=>{
// console.log(err)
// })


//! Promise.race():

// let p1 = new Promise((res, rej)=>{
//     rej("Promise 1 Completed")
// })

// let p2 = new Promise((res, rej)=>{
//     res("Promise 2 Completed")
// })

// let p3 = new Promise((res, rej)=>{
//     rej("Promise 3 Completed")
// }) 

// let res = Promise.race([p1, p2, p3])

// res.then((result)=>{
// console.log(result)
// }).catch((err)=>{
// console.log(err)
// })


//! Promise.any():

// let p1 = new Promise((res, rej)=>{
//     rej("Promise 1 Completed")
// })

// let p2 = new Promise((res, rej)=>{
//     res("Promise 2 Completed")
// })

// let p3 = new Promise((res, rej)=>{
//     rej("Promise 3 Completed")
// })

// let res = Promise.any([p1, p2, p3])

// res.then((result)=>{
// console.log(result)
// }).catch((err)=>{
// console.log(err)
// })


//? Callback Hell

// setTimeout(()=> {
//     setTimeout(()=> {
//         setTimeout(()=> {
//             setTimeout(()=> {
//                 setTimeout(()=> {
//                     setTimeout(()=> {
//                         setTimeout(()=> {
//                             console.log("TASK DONE")
//                         },2000)
//                     },2000)
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
// },2000)

//? Fetch : 

// let res = fetch("https://api.github.com/users")

// res.then((data)=> {
//     return data.json()
// }).then((finalData)=> {
//     console.log(finalData)
// }).catch((err)=>{
//     console.log(err)
// })

//! async and await

// async function fetchAPI() {
//     try{
//         let res = await fetch("https://api.github.com/users")
//         let actualData = await res.json()
//         console.log(actualData)
//     } catch (error) {
//         console.log(error)
//     }   
// }
// fetchAPI()