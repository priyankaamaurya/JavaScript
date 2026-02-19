    const pwd = document.getElementById("password");

    const checkbox = document.getElementById("check");
    
    checkbox.addEventListener("change", function() {

        if (this.checked) {
        pwd.type = "text";        
    } else {
        pwd.type = "password";    
    }

    });
    
