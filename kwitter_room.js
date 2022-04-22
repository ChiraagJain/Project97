const firebaseConfig = {
    apiKey: "AIzaSyAEDfojxFMWLyBMgfUvvmq5c-yIlipUxO0",
    authDomain: "kwitter-7bb4d.firebaseapp.com",
    databaseURL: "https://kwitter-7bb4d-default-rtdb.firebaseio.com",
    projectId: "kwitter-7bb4d",
    storageBucket: "kwitter-7bb4d.appspot.com",
    messagingSenderId: "767157351939",
    appId: "1:767157351939:web:1deaa9d7c38c4879c50036"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

  function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    porpose:"adding room name" 
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}

function  getData(){
    firebase.database().ref("/").on("value",function(snapshot){ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;
        console.log("room name - " + Room_names);
        row = "<div class='room_name' id= "+ Room_names + "onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
    });
    });   
}

getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout(){
    
}