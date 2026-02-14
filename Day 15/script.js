//! object.freeze():

// let obj = {
//     id : 1,
//     objName : "Priyanka",
//     objData : "strawberry"
// }

// Object.freeze(obj);


//* updation --> not possible
// console.log(obj)
// obj.id = 100
// console.log(obj)

//* addition of new property --> not possible
// console.log(obj)
// obj.newKey = "newVal"
// console.log(obj)

//* deletion of existing property --> not possible
// console.log(obj)
// delete obj.id
// console.log(obj)

// Object.isFrozen(): 
// console.log(Object.isFrozen(obj))

//! object.seal(): 

// let obj = {
//     id : 1,
//     objName : "Priyanka",
//     objData : "strawberry"
// }

// Object.seal(obj);

//* updation existing property --> allowed
// console.log(obj)
// obj.id = 100
// console.log(obj)

//* addition of new property --> not possible
// console.log(obj)
// obj.newKey = "newVal"
// console.log(obj)

//* deletion of existing property --> not possible
// console.log(obj)
// delete obj.id
// console.log(obj)

// console.log(Object.isSealed(obj))

//! Object.defineProperty(): 

// let obj = {};

// Object.defineProperty(obj, "objName", {
//     value : "newObjName",
// });
// console.log(obj)

//! Object.defineProperties(): 

// let obj = {};

// Object.defineProperties(obj, {
//     name : {value : "Shalini"},
//     city : {value : "Jalgaon"},
//     dept : {value : "IT"},
// });
// console.log(obj)

//? Prototype:

// console.log(String.prototype)
// console.log(Array.prototype)
// console.log(Object.prototype)

// let str = "priyanka"
// console.log(String.prototype)
// console.log(str.__proto__)

// console.log(String.prototype == str.__proto__)

// console.log(window)

// console.log(window.__proto__.__proto__.__proto__.__proto__)