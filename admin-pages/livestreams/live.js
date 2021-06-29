// function chatEnabled() {
//     newWindow = window.open("https://deadsimplechat.com/sQog9mLCK", null, "height=400,width=350,status=yes,toolbar=no,menubar=no,location=no");
// }

function chatEnabled() {
    window.alert("Chat is only available in Livestream");
}

function leaveLiveStream() {
    window.location = "../admin.html";
}

function redirectYouTube() {
    window.open("https://youtu.be/vo55yjAwN5w");
}

var countDownDate = new Date("July 2, 2021 15:37:25").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);