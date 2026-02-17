
//? Methods or Accessing HTML elements

//! document.getElementById():

// let box = document.getElementById("box")
// console.log(box)

//! document.getElementByClassName():

// let para = document.getElementsByClassName("abc")
// console.log(para)

//! document.getElementByTagName():

// let data = document.getElementsByTagName("p")
// console.log(data)

//! document.querySelector():

// let result = document.querySelector("#box")
// console.log(result)
// let res = document.querySelector(".abc")
// console.log(res)
// let re = document.querySelector("p")
// console.log(re)

//! document.querySelectorAll():

// let data = document.querySelectorAll("#box")
// console.log(data)

// let data2 = document.querySelectorAll(".abc")
// console.log(data2)
// console.log(data2[0])

// let data3 = document.querySelectorAll("p")
// console.log(data3)

//? Inner HTML
//! It gives the content as well as the tags in which the content is present 

//? Inner text: 
//! It gives only the content 

//? Text content : 
//! It gives the content with extra spaces as it is written in the HTML

let ele = document.querySelector(".abc")
console.log(ele)
console.log(ele.innerHTML)
console.log(ele.innerText)
console.log(ele.textContent)
