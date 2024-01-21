window.onload = () => {

    class Minijuego {
        constructor() {
            this.timer = document.querySelector(".timer");
            this.minutes = 0;
            this.seconds = 0;
            this.lastPosition = null;
            this.timerInterval = setInterval(() => this.actualitzarTimer(), 1000);
            this.listeners();
            this.mostrarTimer();
        }
    
        actualitzarTimer() {
            if (this.seconds === 0) {
                if (this.minutes > 0) {
                    this.minutes--;
                    this.seconds = 59;
                }
            } else if (this.seconds === 1) {
                this.seconds--;
                this.treureAigua();
            } else {
                this.seconds--;
            }
            this.mostrarTimer();
        }
    
        treureAigua() {
            document.querySelector(".medidor").firstChild.remove();
        }
    
        mostrarTimer() {
            this.timer.innerHTML = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
        }
    
        listeners() {
            let containers = document.querySelectorAll('.recipiente, .llenado');
            containers.forEach(container => {
                container.addEventListener('dragstart', ev => this.gestionarIniciDrag(ev), false);
                container.addEventListener('dragover', ev => this.gestionarSobreDrag(ev), false);
                container.addEventListener('drop', ev => this.gestionarDrop(ev), false);
            });
        }
    
    
        gestionarSobreDrag(ev) {
            ev.preventDefault();
        }
    
        gestionarIniciDrag(ev) {
            this.lastPosition = document.getElementById("bidon").parentElement;
            ev.dataTransfer.setData("img", ev.target.id);
        }
    
        gestionarDrop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("img");
            ev.target.appendChild(document.getElementById(data).cloneNode(true));
            this.lastPosition.firstElementChild.remove();
            if (ev.target.classList.contains('recipiente')) {
                this.omplirAigua();
                this.girar();
            }
            if (ev.target.classList.contains('llenado')) {
                this.mostrarAigua();
            }
        }
    
        omplirAigua() {
            let container = document.querySelector(".medidor");
            let aigua = document.createElement("div");
            if (container.children.length <= 11) {
                aigua.className = "aigua";
                container.appendChild(aigua);
                this.minutes += 1;
            }
        }
    
        girar() {
            let bidon = document.getElementById("bidon");
            bidon.style.transform = "rotate(-60deg)";
            bidon.parentElement.style.border = "1px solid transparent";
            setTimeout(() => {
                bidon.style.transform = "rotate(0deg)";
                bidon.parentElement.style.border = "1px solid black";
            }, 500);
        }
    
        mostrarAigua() {
            let aiguaCau = document.getElementById("agua");
            aiguaCau.style.visibility = "visible";
            setTimeout(() => {
                aiguaCau.style.visibility = "hidden";
            }, 1000);
        }
    }
    
    const game = new Minijuego();

}