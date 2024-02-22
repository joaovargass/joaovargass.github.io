function validateForms() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let valid = true;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!name) {
        document.getElementById("nameValidation").style.visibility = "visible";
        valid = false;
    } else {
        document.getElementById("nameValidation").style.visibility = "collapse";
    }

    if(!email) {
        document.getElementById("emailValidation").innerText = "Email field required";
        document.getElementById("emailValidation").style.visibility = "visible";
        valid = false;
    } else if(email && !emailRegex.test(String(email))) {
        document.getElementById("emailValidation").innerText = "Invalid email";
        document.getElementById("emailValidation").style.visibility = "visible";
        valid = false;
    } else {
        document.getElementById("emailValidation").style.visibility = "collapse";
    }

    if(!message) {
        document.getElementById("messageValidation").style.visibility = "visible";
        valid = false;
    } else {
        document.getElementById("messageValidation").style.visibility = "collapse";
    }

    if(valid) {
        document.getElementById("messageValidation").style.visibility = "collapse";
        document.getElementById("emailValidation").style.visibility = "collapse";
        document.getElementById("nameValidation").style.visibility = "collapse";
        alert("Email sent!");
        document.getElementById("emailForms").submit();
        document.getElementById("emailForms").reset();
    }
}