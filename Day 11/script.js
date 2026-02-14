
//! 15. indexOf(searchString): 
// let str ="JavaScript is a object based programming language. JavaScript is a object based programming language";
// console.log(str.indexOf("is")) 

//! 16. lastIndexOf(): 
// let str ="JavaScript is a object based programming language. JavaScript is a object based programming language";
// console.log(str.lastIndexOf("is")) 

//! 17. concat(): 
// let a = "hello";
// let b = "world";
// let c = "!!!";

// console.log(a.concat(b,c)) 

//! 18. search(): 
// let str ="JavaScript is a object based programming language" 
// console.log(str.search("is")) 

//! 19. match(): 
// let str ="JavaScript is a object based programming language"  
// console.log(str.match("hgjkh"))

//! 20. repeat(): 
// let str ="pineapple"; 
// console.log(str.repeat(5))

//! 21. includes(): 
// let str ="JavaScript is a object based programming language"  
// console.log(str.includes("hgjkh"))

//? ARRAY
// //! Ways of creating array 

//? CRUD in the array 
 
//* Create
//! Homogeneous array:
// let arr = [1, 3, 5, 6, 7,8]

//! Heterogeneous array:
// let arr1 = [1, null, undefined, "array", true, 12n, function(){console.log("function")}, {}, Symbol("object"), 1, "array"]

//* Read
// console.log(arr)
// console.log(arr1)
// console.log(arr1[5])
// arr1[6]()

//* Update
// console.log(arr1)
// arr1[1] = "updated value"
// console.log(arr1)

//* Delete
// delete arr1[0]
// console.log(arr1)