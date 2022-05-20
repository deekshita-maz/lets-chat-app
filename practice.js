    firebaseConfig = {
    apiKey: "AIzaSyDXU-zVdYKGlABxpUJ2xO2crD9Qx-wNSkU",
    authDomain: "kwitter-9b149.firebaseapp.com",
    databaseURL: "https://kwitter-9b149-default-rtdb.firebaseio.com",
    projectId: "kwitter-9b149",
    storageBucket: "kwitter-9b149.appspot.com",
    messagingSenderId: "839538851271",
    appId: "1:839538851271:web:c5418539bd0ad99fa8ade2",
    measurementId: "G-6B5357E90N"
  };
  
  

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }

  function addRoom()
  {
      room_name=document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

}