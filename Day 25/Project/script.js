let frm = document.querySelector("form")
console.log(frm)

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    let pswd = document.querySelector("#pwd")
    let cnfmpwd = document.querySelector("#cfmpwd")

    console.log(pswd.value)
    console.log(cnfmpwd.value)

    
if(pswd.value==cnfmpwd.value){
    alert("match")
}
else{
    alert("mismatch")
}

})

//  let checkbox = document.getElementById("check");
    
//     checkbox.addEventListener("change", function() {

//     if (this.checked) {
//         pwd.type = "text";        
//     } else {
//         pwd.type = "password";    
//     }
// })


let checkbox = document.querySelector("#check");
    
    checkbox.addEventListener("click", ()=> {

        let pswrd = document.querySelector("#pwd")

        if(pswrd.type === "password"){
            pswrd.type="text"
        } else{
            pswrd.type = "password"
        }
    })
