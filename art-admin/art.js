function start() {
    username = document.getElementById("name").value;
    useremail = document.getElementById("email").value;

    if (username, useremail == "") {
        document.getElementById("error-message").innerHTML = "<i class='fa fa-warning'>&nbsp;</i>" + "Please give correct details" + "<br>";
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("useremail", useremail);

        window.location = "./art-home/home.html";
    }
}

function support() {
    window.open("mailto:nestartedu@gmail.com?Subject=Help me");
}