username = localStorage.getItem("username");
useremail = localStorage.getItem("useremail");
phone_number = localStorage.getItem("number");

newPageTitle = username + "'s " + ' Nest Coder Pro';
document.querySelector('title').textContent = newPageTitle;

function gotovscode() {
    window.open("https://code.visualstudio.com/download");
}

function pythonWebsite() {
    window.open("https://www.python.org/");
}

function pyCharm() {
    window.open("https://www.jetbrains.com/pycharm/download/");
}

function googleDev() {
    window.open("https://www.google.com/intl/en_in/chrome/dev/");
}

function androidAPP() {
    window.open("https://");
}

function chat() {
    window.open("./group-chat/chat.html");
}

function mail() {
    window.open("mailto:nestcoderlive@gmail.com?Subject=Hello Nest Coders");
}

function joinStream() {
    window.location = "./livestreams/live.html";
}