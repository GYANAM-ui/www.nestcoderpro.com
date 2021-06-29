username = localStorage.getItem("name");
useremail = localStorage.getItem("email");

document.getElementById("name").innerHTML = "Welcome " + username + " !!";

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