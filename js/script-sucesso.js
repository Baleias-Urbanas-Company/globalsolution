//Recuperando o objeto enviado atrav'es do localStorage.
let usuario = JSON.parse(localStorage.getItem("usuario-logado"));

if(usuario){
console.log(usuario.nomeCompleto);

const msgWelcome = document.querySelector("#bem-vindo");
msgWelcome.innerText = usuario.nomeCompleto;

const logoutUser = document.querySelector("#logout-user");
logoutUser.addEventListener("click",()=>{
    localStorage.removeItem("usuario-logado");
    window.location.href = "../index.html";
});
}else{
    window.location.href = "../index.html";
}