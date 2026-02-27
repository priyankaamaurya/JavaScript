
//? setItem(key, Value) : 
// sessionStorage.setItem("id",1)
// sessionStorage.setItem("name", "Prince")
// sessionStorage.setItem("Designation", "Developer")

//? getItem(key) :
// let res = sessionStorage.getItem("id")
// console.log(res)
// console.log(typeof(res))
// console.log(sessionStorage.getItem("name"))

//? removeItem(key) : 
// sessionStorage.removeItem("id")

//? clear() : 
// sessionStorage.clear()


//? Date Object

//! current things
// let now = new Date()
// console.log(now)

// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getMonth())
// console.log(now.getSeconds())
// console.log(now.getTime())
// console.log(now.getFullYear())

//! when javaScript firstly introduced
// let date = new Date(0)
// console.log(date)        // EPOCH time

//! any previous time
// let previousDate = new Date("2003-11-17")
// console.log(previousDate)

// let previousDate1 = new Date("2005-06-15")
// console.log(previousDate1)

//! difference between date  (always return in seconds)
// let birthDate = new Date("2005-06-25")
// let currentDate = new Date()
// console.log(currentDate-birthDate) 
// always return in seconds

//? Math.Object :

//! Euler's no 
// console.log(Math.E)

// console.log(Math.PI)

// console.log(Math.floor(4.4))
// console.log(Math.floor(4.5))
// console.log(Math.floor(4.9))

// console.log(Math.ceil(4.4))
// console.log(Math.ceil(4.5))
// console.log(Math.ceil(4.9))

// console.log(Math.round(4.4))
// console.log(Math.round(4.5))
// console.log(Math.round(4.9))

// console.log(Math.trunc(40.5))
// console.log(Math.trunc(4.0))

// console.log(Math.abs(40.5))
// console.log(Math.abs(4.0))

// console.log(Math.min(-1, 5, 7, 3, -4,40.5))
// console.log(Math.min(10, -55, 35, 74, 4.0))

// console.log(Math.max(-1, 5, 7, 3, -4,40.5))
// console.log(Math.max(10, -55, 35, 74, 4.0))