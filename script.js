import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import {

getDatabase,

ref,

push,

onValue

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";





const firebaseConfig = {


apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

databaseURL:"YOUR_DATABASE_URL",

projectId:"YOUR_PROJECT_ID",

storageBucket:"YOUR_BUCKET",

messagingSenderId:"YOUR_SENDER_ID",

appId:"YOUR_APP_ID"


};



const app =
initializeApp(firebaseConfig);



const database =
getDatabase(app);



const chatRef =
ref(database,"messages");



const username =
document.getElementById("username");


const message =
document.getElementById("message");


const sendBtn =
document.getElementById("sendBtn");


const chatBox =
document.getElementById("chatBox");




sendBtn.addEventListener(
"click",

()=>{


if(
username.value==="" ||
message.value===""

){

alert("Enter name and message");

return;

}



push(chatRef,{

name:username.value,

text:message.value,

time:new Date().toLocaleTimeString()

});


message.value="";


}

);





onValue(chatRef,(snapshot)=>{


chatBox.innerHTML="";


snapshot.forEach((data)=>{


const msg=data.val();



chatBox.innerHTML += `

<div class="message">

<b>${msg.name}</b>

<p>${msg.text}</p>

<span>${msg.time}</span>

</div>

`;


});


});