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

apkURL = 'https://u6512343.ct.sendgrid.net/ls/click?upn=9JS-2F714wtrENuLalHfV-2BI9UsKKdIAuBCevyxZgAwUD9TRHF5DcdyX6mAzNKk-2Ffdc5tOk-2FAU6NIma7gwY6SDe1etMb6PX1JF-2FfKuurW9NQJg2m-2BrMf501qd5-2Byx0Zlf-2Bl4bsSOQB8LbMXSEz6BIkKw9xC7RGnovkkoRK6Cc0sSXwxum4SwB4KOgJ7gyNtgAbxIzMjAMKY8rRFbe1WTMG9IOWotzgPJ6rcmj6thREBjeo-3DxS-X_OqnQb4IWbSMkjfoiwwHcA6QfJdnVXye-2BgVLKkY-2FMU79mSONuKfr-2FwEIN4PR-2FhDtA6lx2ZPLQJ5hxqldkOp05RuZ9QcyNXxuP4u8HeKjOM4C9gifGSgqwAUfLgu9LUx2uYvuWUkdxsNQgxTxiDMsohBlAQE0W9-2F1cpvPaWFwn6srVRfAcS8Y-2Bguag-2FgohKeDv41ABE1rGYe92iygTm9S7C8MKcZPYUEqa1JvBRy33IvWUiklB7B2tNUql-2FFA9Q1hSQCjmvS9eB0wMR-2FyaHon1kfAhVdIb8a-2BJCAN0yyjYG0-2Bl4omPw1js27RiNJrS19IleNdEmBgOSa5l-2BpIEinmTo57tyUmHDnHcvS7deZEA4iA-3D';

function downloadAPK() {
    window.open(apkURL);
}