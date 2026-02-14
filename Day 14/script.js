//! 16. sort(): 

// let arr = [1, 3, 4, 54, 5, 15, 17, 100]

// let res = arr.sort((a,b) => {
    // return a-b; // ascending order
    // return b-a; // descending order
// })
// console.log(res)

//? Object

//! create

// let obj = {
//     id : 1,
//     objName : "Priyanka",
//     sal : 1560000n,
//     isDeveloper : true,
//     skills : ["HTML", "CSS", "JS"],
//     isMarried : null,
//     printName : () => {
//         console.log("OBJECT FUNCTION")
//     },
//     address : {
//         street : "abc",
//         pin : 122001,
//     },
// };

//! read

// console.log(obj.id);
// console.log(obj.printName())
// console.log(obj.address.street)
// obj.printName()

//! update

// obj.objName = "Strawberry"
// console.log(obj.objName);

//! delete 
// delete obj.id
// console.log(obj);

//! adding new property

// console.log(obj);
// obj.academic = "Qspiders"
// console.log(obj);

//! 2nd way of creating object : constructor way

// let obj2 = new Object({ id : 11, name : "pineapple"});
// console.log(obj2);

//? Object.create

// let newObj = Object.create({ id : 1, sal : 1253000});
// console.log(newObj);

//? Methods of object

//! object.keys: 

// let obj = {
//     id : 1,
//     objName : "Priyanka",
//     sal : 1560000n,
//     isDeveloper : true,
//     skills : ["HTML", "CSS", "JS"],
//     isMarried : null,
//     printName : () => {
//         console.log("OBJECT FUNCTION")
//     },
//     address : {
//         street : "abc",
//         pin : 122001,
//     },
// };

// console.log(Object.keys(obj))

//! object.values: 
// console.log(Object.values(obj))

//! object.entries: 
// console.log(Object.entries(obj))

//! object.fromEntries: 
// let arr = [["id", 1], ["objName", "Alien"]]
// console.log(Object.fromEntries(arr))

