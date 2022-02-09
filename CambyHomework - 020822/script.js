

function validateForm(){
    
    firstName.addEventListener("input",onInput);
    function onInput(){
        const firstName = document.getElementById("firstName").value;
        if(firstName == ""){
            register.disabled = true;
            alert("Please enter First Name.");
            firstName.focus();
            return false;
        }
    }
    
    lastName.addEventListener("input",onInput);
    function onInput(){
        var lastName = document.getElementById("lastName").value;
        if(lastName == ""){
            register.disabled = true;
            alert("Please enter Last Name.");
            lastName.focus();
            return false;
        }
    }
    phone.addEventListener("input",onInput);
    function onInput(){
        var phone = document.getElementById("input").value;
        if(phone == ""){
            register.disabled = true;
            alert("Please enter phone number.");
            phone.focus();
            return false;
        }
    }
    email.addEventListener("input",onInput);
    function onInput(){
        var email = document.getElementById("email").value;
        if(email == ""){
            register.disabled = true;
            alert("Please enter email address.");
            email.focus();
            return false;
        }
    }
    password.addEventListener("input",onInput);
    function onInput(){
        var password = document.getElementById("password").value;
        if(password == ""){
            register.disabled = true;
            alert("Please choose a password.");
            password.focus();
            return false;
        }
    }
    confirmPassword.addEventListener("input",onInput);
    function onInput(){
        var confirmPassword = document.getElementById("confirmPassword").value;
        if(confirmPassword == ""){
            register.disabled = true;
            alert("Please choose a password.");
            password.focus();
            return false;
        }
    }
        if(password != confirmPassword){
            register.disabled = true;
            alert("Passwords must match.")
            password.focus();
            return false;
        }
    checkbox.addEventListener("input",onInput);
    function onInput(){
        var checkbox = document.getElementById("checkbox").value;
        if(checkbox != checked){
            register.disabled = true;
            alert("Please choose a password.");
            return false;
        }
    }
       
      
    return true;
    
}

