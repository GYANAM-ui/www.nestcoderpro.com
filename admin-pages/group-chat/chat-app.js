user_name = localStorage.getItem("username");
room_store = "Gorup-Chats";

var firebaseConfig = {
    apiKey: "AIzaSyCE5prMYhHlLtZeqau0Bryh9auyGPzsPq0",
    authDomain: "nest-coder-database.firebaseapp.com",
    databaseURL: "https://nest-coder-database-default-rtdb.firebaseio.com",
    projectId: "nest-coder-database",
    storageBucket: "nest-coder-database.appspot.com",
    messagingSenderId: "351597088298",
    appId: "1:351597088298:web:d607b544bb2d03ded97d53"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function send() {
    msg = document.getElementById("msg").value;

    if (msg == "") {
        document.getElementById("msg").placeholder = "Don't type empty massage";
    } else {
        firebase.database().ref(room_store).push({
            name: user_name,
            message: msg
        });
        document.getElementById("msg").value = "";
        document.getElementById("msg").placeholder = "Type here";
    }
}

function getData() {
    firebase.database().ref("/" + room_store).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];

                name_tag = "<h6 class='username_h4'><img class='user_tick' src='../../images/default-user.png'/> " + name + "</h6>";
                message_tag = "<h4 class='message_h4'>" + message + "</h4><hr>";
                row = name_tag + message_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function logout() {
    window.location = "../admin.html";
}