function validateContactData() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    alert(nameIsValid(name.value));
    //alert(nameIsValid(email.value));
}

function nameIsValid(name) {
    return name.length > 3 && name.length <= 30;
}

function emailIsValid(email) {
    
}

function  messageIsValid(message) {
    return message.length > 20 && message.length <= 500;
}

