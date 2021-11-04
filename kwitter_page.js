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

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function Send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    localStorage.removeItem("Room_name");
    window.location = "index.html";
    }
