var firebaseConfig = {
    apiKey: "AIzaSyCyV0jO_eNAsA6OZQixF5nAUFccCVWxqd4",
    authDomain: "chat-app-75a8e.firebaseapp.com",
    databaseURL: "https://chat-app-75a8e-default-rtdb.firebaseio.com",
    projectId: "chat-app-75a8e",
    storageBucket: "chat-app-75a8e.appspot.com",
    messagingSenderId: "146186455236",
    appId: "1:146186455236:web:30cf669eac3676d11ee191",
    measurementId: "G-PDZ9V337S9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("Username");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="letschat_page.html";
  }

  function getData(){
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
    });
});
  }

  getData();

  function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="letschat_page.html";
  }

  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
  }