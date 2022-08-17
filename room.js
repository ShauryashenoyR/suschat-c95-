user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome sussy" + user_name +"!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({

    });

    localStorage.setItem("room_name", room_name);

    window.location = "sussy_room.html";
}

function getData() {
      room_names = childkey;
 //startcode


 //Endcode   
 });});}
getData(); 


function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "sussy_room.html";
}