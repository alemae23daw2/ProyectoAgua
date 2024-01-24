window.onload = () =>{

    let buttons = document.querySelectorAll(".popup-inner button");
    let popup = document.querySelector(".popup");
    let loginButton = document.querySelector(".perfil>h1");
    loginButton.addEventListener("click", () =>{
        popup.style.display = "block";
    });

    buttons[1].addEventListener("click", () =>{
        popup.style.display = "none";
    });
}