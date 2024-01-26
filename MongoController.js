window.onload = () =>{

    let registre = document.querySelector(".popup");
    let login = document.querySelector(".popup2");
    
    let loginButton = document.querySelector(".perfil>h1");
    loginButton.addEventListener("click", () =>{
        registre.style.display = "block";
    });

    let buttons = document.querySelectorAll(".popup-inner button");
    buttons[1].addEventListener("click", () =>{
        registre.style.display = "none";
        login.style.display = "none";
    });

    let conmutador = document.querySelector(".conmutador");
    let estat = false;
    conmutador.addEventListener("click", () =>{
        if(!estat){
            registre.style.display = "none";
            login.style.display = "block";
        }else if(estat){
            registre.style.display = "block";
            login.style.display = "none";
        }
    });

}