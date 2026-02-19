//? Event Propagation

let gp = document.querySelector(".grandParent")
let par = document.querySelector(".par")
let child = document.querySelector(".child")

gp.addEventListener("click", ()=>{
    console.log("GrandParent")
}, true)

par.addEventListener("click", ()=>{
    console.log("Parent")
}, true)

child.addEventListener("click", ()=>{
    console.log("Child")
}, true)



// let btn = document.querySelector("button")

// function print(){
//      console.log("Button is clicked")
// }

// btn.addEventListener("dblclick", print)


