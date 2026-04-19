// script.js

function checkPass(){
const pass=document.getElementById("pass").value;
const hidden=document.getElementById("hidden");
const vid=document.getElementById("myVideo");

if(pass==="7879"){
hidden.style.display="block";

if(vid){
vid.load();
vid.play().catch(()=>{});
}

hidden.scrollIntoView({
behavior:"smooth"
});
}
else{
alert("Wrong Password ❌");
}
}
