window.onload = () => {

    let timer = document.querySelector(".timer");
    let minuts = 0;
    let segons = 0;

    mostrarTimer();

    let timerInterval = setInterval(actualitzarTimer, 1000);

    function actualitzarTimer() {
        if (segons === 0) {
            if (minuts > 0) {
                minuts--;
                segons = 59;
            }
        } else if(segons == 1){
            segons--;
            treureAigua();
        }else{
            segons--;
        }
        mostrarTimer();
    }

    function treureAigua(){
        document.querySelector(".medidor").firstChild.remove();
    }

    function mostrarTimer() {
        timer.innerHTML = `${minuts.toString().padStart(2, '0')}:${segons.toString().padStart(2, '0')}`;
    }

    let ultimaPosicio;
    var recipiente = document.querySelectorAll('.recipiente');
    [].forEach.call(recipiente, function (rec) {
        rec.addEventListener('dragstart', gestionarIniciDrag, false);
    });
    [].forEach.call(recipiente, function (rec) {
        rec.addEventListener('dragover', gestionarSobreDrag, false);
        rec.addEventListener('drop', gestionarDrop, false);
    });

    var llenado = document.querySelectorAll('.llenado');
    [].forEach.call(llenado, function (lle) {
        lle.addEventListener('dragover', gestionarSobreDrag, false);
        lle.addEventListener('drop', gestionarDrop, false);
    });
    [].forEach.call(llenado, function (lle) {
        lle.addEventListener('dragstart', gestionarIniciDrag, false);
    });

    function gestionarSobreDrag(ev) {
        ev.preventDefault();
    }

    function gestionarIniciDrag(ev) {
        ultimaPosicio = document.getElementById("bidon").parentElement;
        ev.dataTransfer.setData("img", ev.target.id);
    }

    function gestionarDrop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("img");
        ev.target.appendChild(document.getElementById(data).cloneNode(true));
        ultimaPosicio.firstElementChild.remove();
        if (ev.target == recipiente[0]) {
            omplirAigua();
            girar();
        }
    }

    function omplirAigua() {
        let container = document.querySelector(".medidor");
        let aigua = document.createElement("div");
        if (container.children.length <= 11) {
            aigua.className = "aigua";
            container.appendChild(aigua);
            minuts += 1;
        }
    }

    function girar(){
        document.getElementById("bidon").style.transform = "rotate(-60deg)";
        document.getElementById("bidon").parentElement.style.border = "1px solid transparent";
        setTimeout(() => {
            document.getElementById("bidon").style.transform = "rotate(0deg)";
            document.getElementById("bidon").parentElement.style.border = "1px solid black";
        }, 500);
        
    }
}