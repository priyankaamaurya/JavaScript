//? Ways of creating the String

//! Literal's way

// let str ="String 1" 
// let str1 ='String 2' 
// let str2 =`String 3` 

// console.log(str)
// console.log(typeof(str))
// console.log(str1)
// console.log(typeof(str1))
// console.log(str2)
// console.log(typeof(str2))

//! Template literal

// let str =`hddnj
// jdkdvdv
// dbjdvnlv`
// console.log(str)

//! String InterPollution 

// let sub="JAVASCRIPT"
// console.log(`THIS IS ${sub} CLASS`)

//! Typecasting 
// let str = String(2435)
// console.log(str)
// console.log(typeof(str))

// let str = new String(2435)
// console.log(str)
// console.log(typeof(str))

//? Property of String

//! length:
// let str = "hfgjb"
// console.log(str.length)

//? Methods Of String

// let str = "String";
// console.log(str[0])
// console.log(str[3])
// console.log(str[2])

//! 1. at():
// let str = "String";
// console.log(str.at(0))
// console.log(str.at(2))
// console.log(str.at(4))

//! 2. charAt(index)
// let str = "String";
// console.log(str.charAt(0)) 
// console.log(str.charAt(2))
// console.log(str.charAt(4))

//! 3. charCodeAt(index)
// let str = "String"; 
// console.log(str.charCodeAt(4))

//! 4. slice(startingIndex, endIndex --> exclusive)
// let str ="This is slice";
// console.log(str.slice(5, 7)) 
// console.log(str.slice(1))  
// it consider it str.length
// console.log(str.slice(-5, 7)) 
// -ve not consider
// console.log(str.slice(3, -5)) 

let str ="This is String";
// console.log(str.slice(3, -5)) 
// console.log(str.slice(-3, 5)) 
// console.log(str.slice(-3, -5)) 

//! 5. substring:
// console.log(str.substring(5, 7))
// console.log(str.substring(7, 5))
// console.log(str.substring(-2, 7))
// console.log(str.substring(5, -2))

//! 6. toUpperCase()
// console.log(str.toUpperCase())

//! 7. toLowerCase()
// console.log(str.toLowerCase())
