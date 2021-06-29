username = localStorage.getItem("username");
useremail = localStorage.getItem("useremail");

document.getElementById("name").innerHTML = "Welcome " + username + " !!";
document.getElementById("email").innerHTML = "Email: " + useremail;

emailing = "mailto:" + useremail;

function userMail() {
    window.open(emailing);
}

function mail() {
    window.open("mailto:nestcoderlive@gmail.com?Subject=Support");
    console.log("Supporting start by mail...");
}

function artChannelJK() {
    console.log("Loading... Opening YouTube...");
    window.open("https://www.youtube.com/channel/UCoPdpwxb59tsUGgX3wDdTRQ/featured");
}

function scrollTOP() {
    window.scrollTo(0, 0);
}

function switchCoding() {
    window.location = "../../index.html";
}