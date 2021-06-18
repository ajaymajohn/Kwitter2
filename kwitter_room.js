
var firebaseConfig = {
      apiKey: "AIzaSyBe4XVko8pqL2KfH6qjAnhPLpun08XUoew",
      authDomain: "kwitter-f11e0.firebaseapp.com",
      databaseURL: "https://kwitter-f11e0-default-rtdb.firebaseio.com",
      projectId: "kwitter-f11e0",
      storageBucket: "kwitter-f11e0.appspot.com",
      messagingSenderId: "929974149038",
      appId: "1:929974149038:web:4b3a920715f86c191cf23f"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose:"adding roomname"});
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}