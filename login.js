function loginCheck() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("loginMsg");

    if (email === "" || password === "") {
        msg.innerHTML = "All fields are required";
    } else {
        msg.innerHTML = "";
        alert("Login successful");
    }
}

function checkPassword() {
    let p1 = document.getElementById("pass1").value;
    let p2 = document.getElementById("pass2").value;
    let msg = document.getElementById("resetMsg");

    if (p1 === "" || p2 === "") {
        msg.innerHTML = "Please fill both fields";
    } 
    else if (p1 !== p2) {
        msg.innerHTML = "Passwords do not match";
    } 
    else {
        msg.innerHTML = "";
        alert("Password reset successful");
        window.location.href = "index.html";
    }
}
