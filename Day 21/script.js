// let ele = document.querySelector("input")
// console.log(ele)

//! accessing the value of attributes
// console.log(ele.type)
// console.log(ele.placeholder)

//! updating the value of attributes
// ele.type="password"

//! adding new attributes
// ele.minLength = 10


//? Methods for accessing attribute

//! getAttribute() :
// console.log(ele.getAttribute("type"))
// console.log(ele.getAttribute("placeholder"))

//! setAttribute() : 
// console.log(ele.setAttribute("name" , "abc"))
// console.log(ele.setAttribute("minlength", 10))

// console.log(ele.setAttribute("placeholder", "hello"))

//? Ways to add CSS using DOM

// let headTag = document.querySelector("h1")
// console.log(headTag)

//! inline CSS 
// headTag.style.color = "red"
// headTag.style.backgroundColor = "black"

//! Internal & External CSS 
// headTag.className = "abc"

// headTag.className = "hlo"  // It replaces all elements inside the ele

//? classList

//! classList.add() : 
// headTag.classList.add("abc") 
// headTag.classList.add("def") 

//! classList.remove() : 
// headTag.classList.remove("abc") 


//! classList.toggle() : 
// headTag.classList.toggle("abc") 

//? TASK

function changeTheme(){
    let bdy = document.querySelector("body")
   
    let btn = document.querySelector("button")

    if(btn.innerText === "DARK MODE"){
        btn.innerText = "LIGHT MODE"
        bdy.classList.toggle("theme")
    }else {
        btn.innerText = "DARK MODE"
        bdy.classList.toggle("theme")
    }

    
}

