function addUser(){
var User_name = document.getElementById("user_name").value;
    localStorage.setItem("username", User_name);
    window.location = "kwitter_room.html";
    console.log("hi")
}