var firebaseConfig = {
    apiKey: "AIzaSyCLfapWdZxRLyEhaTdBcnmUDPtwPzappUI",
    authDomain: "kwitter-f8fb7.firebaseapp.com",
    databaseURL: "https://kwitter-f8fb7-default-rtdb.firebaseio.com",
    projectId: "kwitter-f8fb7",
    storageBucket: "kwitter-f8fb7.appspot.com",
    messagingSenderId: "830041194051",
    appId: "1:830041194051:web:8a83adb9a7543c4c775ef6"
  };

firebase.initializeApp(firebaseConfig);


var player_name = localStorage.getItem("username");
document.getElementById("users-name").innerHTML = "Welcome " + player_name;

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}


function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                row = "<div class='room_name id='+room_names+' onclick='redirectToRoomName(this.id)'> #" + Room_names + " </div> <hr>";
                document.getElementById("output").innerHTML += row;
                //End code
            });
        });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    localStorage.removeItem("Room_name");
    window.location = "index.html";
    }