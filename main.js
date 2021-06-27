function start() {
    username = document.getElementById("name").value;
    useremail = document.getElementById("email").value;
    phone_number = document.getElementById("number").value;

    if (username, useremail == "") {
        document.getElementById("error_span").innerHTML = "<i class='fa fa-warning'>&nbsp;</i>" + "Please give correct details";
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("useremail", useremail);
        localStorage.setItem("number", phone_number);

        window.location = "admin-pages/admin.html";
    }
}

function artEd() {
    window.location = "art-admin/art-login.html";
}