
var userNameInput = document.getElementById("userNameInput");
var userNameSpan = document.getElementById("userNameSpan");

function saveName(){
    localStorage.setItem("username", userNameInput.value);
    userNameSpan.innerHTML = userNameInput.value;
}

if(localStorage.getItem('username') !== null){
   userNameSpan.innerHTML = localStorage.getItem("username");
}

function forgetName(){
    localStorage.removeItem("username");
    userNameSpan.innerHTML = "User"
}