let nameError = document.getElementById("name_error");
let userError = document.getElementById("user_error");
let passError = document.getElementById("pass_error");
let phoneError = document.getElementById("phone_error");
let mailError = document.getElementById("mail_error");
let msgError = document.getElementById("message_error");
let submitError = document.getElementById("submit_error");

const toggle = document.getElementById("toggle");

function validateName() {
    let unm = document.getElementById("contact_name").value;
    let regex = /^[A-Za-z]{3,50}\s{1}[A-Za-z]{3,50}$/;

    if(unm.length == 0) {        
        nameError.innerHTML = "Name is Required";
        return false;
    }    
    if(!regex.test(unm)) {        
        nameError.innerHTML = "Invalid";
        return false;
    } else {        
        nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

function validateUser() {
    let user = document.getElementById("contact_user").value;
    let regex = /^[a-zA-Z]([0-9a-zA-Z]{2,10}$)/;

    if(user.length == 0) {
        userError.innerHTML = "UserName Required";
        return false;
    }
    if(!regex.test(user)) {
        userError.innerHTML = "At least 3 digit";
        return false;
    } else {
        userError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

function validatePass() {
    let pass = document.getElementById("contact_pass").value;
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(pass.length == 0) {
        passError.innerHTML = "Password Required";
        return false;
    }
    if(!regex.test(pass)) {
        passError.innerHTML = "Minimum 8 characters";
        return false;
    } else {
        passError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }   

}

function showHide() {
    let pass = document.getElementById("contact_pass");    
    if(pass.type === "password") {
        pass.setAttribute('type', 'text');
        toggle.classList.add("hide");
    } else {
        pass.setAttribute('type', 'password');
        toggle.classList.remove("hide");
    }
}

function validatePhone() {
    let phone = document.getElementById("contact_phone").value;
    let regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

    if(phone.length == 0) {
        phoneError.innerHTML = "Phone no. Required";
        return false;
    }
    if(!regex.test(phone)) {
        phoneError.innerHTML = "Invalid";
        return false;
    } else {
       phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

function validateMail() {
    let mail = document.getElementById("contact_mail").value;
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if(mail.length == 0) {
        mailError.innerHTML = "E-mail Required";
        return false;
    }
    if(!regex.test(mail)) {
        mailError.innerHTML = "Invalid";
        return false;
    } else {
        mailError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}

function validateMsg() {
    let msg = document.getElementById("contact_msg").value;
    let required = 30;
    let left = required - msg.length;    

    if(msg.length == 0) {
        msgError.innerHTML = "Message Required at least 30 characters";
        return false;
    }
    if(left > 0) {
        msgError.innerHTML = left + " more characters required";
        return false;
    } else {
        msgError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
}


let submit = document.getElementById("submit");

submit.addEventListener('click', (e) => {    
    if(!validateName() || !validateUser() || !validatePass() || !validatePhone || !validateMail() || !validateMsg()) {
        e.preventDefault();
    }
    
});