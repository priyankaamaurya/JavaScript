//! Shallow copy and Deep copy

//? Shallow copy: 

// let obj = {
//     id : 1001,
//     objName : "Myra",
//     sal : 45000,
//     isDev : true,
//     address : {
//         city : "Gurgaon",
//         pin : 322416,
//     },
// };

//! 1st way :
// let newObj = Object.assign ({}, obj)
// newObj.address.city = "Jalgaon";
// console.log("Obj", obj)
// console.log("newObj", newObj)

//! in case of nested it change in both objects bcoz it has same reference

//! 2nd way :
// let newObj = {...obj}

// newObj.id = 101;  //change only in newObj

// newObj.address.city = "Jalgaon";    //changes in both bcoz of same reference

// console.log("Obj", obj)
// console.log("newObj", newObj)

//! 3rd way :

//? For only keys
// for (let key in obj){
//     console.log(key)
// }

//? For only values
// for (let key in obj){
//     console.log(obj[key])
// }

//? For only keys and values
// let newObj = {};

// for (let key in obj) {
//    newObj[key] = obj[key];
// }
//  console.log("obj", obj)
//  console.log("newObj", newObj)

//! Deep copy

//! 1st way
// let newObj = structuredClone(obj)

// newObj.address.pin = 1;     //no changes in case of nested

// console.log("obj", obj)
// console.log("newObj", newObj)

//! JSON --> JavaScript Object Notation
//! JSON.stringify(obj) --> wrapping the keys with "".
// !JSON.parse(JSON.stringify(obj))  --> convert string into object

//! 2nd way
// let newObj = JSON.parse(JSON.stringify(obj))

// newObj.address.pin = 1;     //no changes in case of nested

// console.log("obj", obj)
// console.log("newObj", newObj)















