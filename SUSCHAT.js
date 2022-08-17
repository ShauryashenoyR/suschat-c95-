kwitter.js
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBufPzyg6XM6tAo7Sok-OyBavzeJbGLPi8",
    authDomain: "classtest-ad2d1.firebaseapp.com",
    projectId: "classtest-ad2d1",
    storageBucket: "classtest-ad2d1.appspot.com",
    messagingSenderId: "993235682952",
    appId: "1:993235682952:web:a7b8949c918d085e72013d",
    measurementId: "G-FHGPLZYEN1"
  };
  
function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "sussy_room.html";
}

