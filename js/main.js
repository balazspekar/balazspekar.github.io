function validateContactData() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var nameBool = nameIsValid(name.value);
    var emailBool = emailIsValid(email.value);
    var messageBool = messageIsValid(message.value);

    if (!(nameBool && emailBool && messageBool)) {
        alert("You must use valid data.");
        return false;
    }

    alert("Since this is a demo site and there is no server side scripting, your message will not be sent.");
    alert("You will get a 404 error now, please use the back button of your web browser.");
    return true;
}

// the name must be longer than 3 chars and less than or equal to 30 chars
function nameIsValid(name) {
    return name.length > 3 && name.length <= 30;
}

function emailIsValid(email) {
    // gotta look into RegEx, in the meantime, all email is considered _valid_
    return true;
}

// the message must be longer than 20 chars and less than or equal to 500 chars
function  messageIsValid(message) {
    return message.length > 20 && message.length <= 500;
}
