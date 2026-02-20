//? Event Propagation

let gp = document.querySelector(".grandParent")
let par = document.querySelector(".par")
let child = document.querySelector(".child")

gp.addEventListener("click", ()=>{
    console.log("GrandParent")
}, )

par.addEventListener("click", ()=>{
    console.log("Parent")
}, )

child.addEventListener("click", ()=>{
    console.log("Child")
}, )

// in case of bubbling --> use false
// in case of capturing --> use true

// let btn = document.querySelector("button")

// function print(){
//      console.log("Button is clicked")
// }

// btn.addEventListener("dblclick", print)


