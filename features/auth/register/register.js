const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");
const confirmpass = document.getElementById("confirm");
const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function(event){

    event.preventDefault();

    if(email.value === "" || password.value === "" || username.value === "" || confirmpass.value === ""){
        alert("Input tidak boleh kosong");
    } else if (password.value !== confirmpass.value) {
        alert("Password tidak sama");
    } else {
        alert("Register Berhasil")
    }

});