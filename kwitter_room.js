const firebaseConfig = {
  apiKey: "AIzaSyCVo-q0zbfcZLaCK4Lb1MvAdt2lo7M0eyA",
  authDomain: "kwitter2-98e9e.firebaseapp.com",
  databaseURL: "https://kwitter2-98e9e-default-rtdb.firebaseio.com",
  projectId: "kwitter2-98e9e",
  storageBucket: "kwitter2-98e9e.appspot.com",
  messagingSenderId: "257166616457",
  appId: "1:257166616457:web:2046d08ccf0b551d6ee358",
  measurementId: "G-0XR45R09RT"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
