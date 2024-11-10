document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-toggle").addEventListener("click", function() {
        toggleForm("login");
    });

    document.getElementById("signup-toggle").addEventListener("click", function() {
        toggleForm("signup");
    });

    document.getElementById("username").addEventListener("input", function() {
        validateUsername(this);
    });

    document.getElementById("new-username").addEventListener("input", function() {
        validateUsername(this);
    });
});

function toggleForm(formType) {
    if (formType === "login") {
        document.getElementById("login-form").style.display = "block";
        document.getElementById("signup-form").style.display = "none";
    } else {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "block";
    }
}

function validateUsername(input) {
    var message = input.nextElementSibling;
    if (input.value.length > 3) {
        message.textContent = "Valid";
        message.style.color = "green";
    } else {
        message.textContent = "Username should be at least 3 characters long";
        message.style.color = "red";
    }
}

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields");
        return false;
    }

    return true;
}

function validateSignup() {
    var username = document.getElementById("new-username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
