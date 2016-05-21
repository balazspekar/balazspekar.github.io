(function(app) {

    var name;
    var email;
    var message;

    var nameBool;
    var emailBool;
    var messageBool;

    var NameIsValid;

    // the name must be longer than 3 chars and less than or equal to 30 chars
    app.NameIsValid = function(name) {
        return name.length > 3 && name.length <= 30;
    };

    app.EmailIsValid = function(email) {
        // gotta look into RegEx, in the meantime, all email is considered _invalid_
        return true;
    };

    // the message must be longer than 20 chars and less than or equal to 500 chars
    app.MessageIsValid = function(message) {
        return message.length > 10 && message.length <= 1000;
    };

    app.ValidateContactData = function() {

        name = document.getElementById("name");
        email = document.getElementById("email");
        message = document.getElementById("message");

        nameBool = app.NameIsValid(name.value);
        emailBool = app.EmailIsValid(email.value);
        messageBool = app.MessageIsValid(message.value);

        if (nameBool && emailBool && messageBool) {
            return true;
        } else {
            alert("Hmm... you should enter valid data. Please re-check and submit again! Thanks.");
            return false;
        }

    };

})(window.myApp = window.myApp || {});