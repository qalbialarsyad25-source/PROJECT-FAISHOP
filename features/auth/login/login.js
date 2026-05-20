const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function(event){

    event.preventDefault();

    if(email.value === "" || password.value === ""){
        alert("Input tidak boleh kosong");
    } else {
        alert("Login berhasil");
    }

});