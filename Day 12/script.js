//? Property of Array

//! length:
// let arr = [1, 3, 5, 6, 7,8]
// console.log(arr.length)

//? Methods of Array

//!  1. push(): 
// let arr = [1, 3, 5, 6, 7,8]
// arr.push(17, 15)
// console.log(arr)
// let res = arr.push()
// console.log(res)

//! 2. pop():
// let arr = [1, 3, 5, 6, 7,8]
// arr.pop()
// console.log(arr)
// let res = arr.pop()
// console.log(res)

//! 3. unshift(): 
// let arr = [1, 3, 5, 6, 7,8]
// arr.unshift(15, 17)
// console.log(arr)
// let res = arr.unshift()
// console.log(res) 

//! 4. shift(): 
// let arr = [1, 3, 5, 6, 7,8]
// arr.shift()
// console.log(arr)
// let res1 = arr.shift()
// console.log(res1) 

//! 5. slice(): 
// let arr =[1,2,3,4,5,6,7,8]
// console.log(arr)
// let newArr = arr.slice(2, 5)
// console.log(newArr)
// console.log(arr) ///


//! 6. splice(): 
// let arr  =[1,2,3,4,5,6,7,8] 
// console.log(arr)
// let newArr = arr.splice(2, 2, "Hiii")
// console.log(newArr)
// console.log(arr)

//! 7. flat():
// let arr  =[[[[[[[[[[[[[1]]]]]]]]]]]]] 
// let res = arr.flat(13)
// console.log(res)
// let res1 = arr.flat(Infinity)
// console.log(res1) 

// let arr  =[[[[[[[1,2,3,[[["Hlo",[[[1]]]]]]]]]]]]] 
// let res1 = arr.flat(Infinity)
// console.log(res1)

//! 8. reverse(): 
// let arr  =[1,2,3,4,5,6,7,8] 
// console.log(arr.reverse())