window.onload = () => {

    let ultimaPosicio;
    var recipiente = document.querySelectorAll('.recipiente');
    [].forEach.call(recipiente, function(rec) {
        rec.addEventListener('dragstart', gestionarIniciDrag, false);
    });
    [].forEach.call(recipiente, function(rec){
        rec.addEventListener('dragover', gestionarSobreDrag, false);
        rec.addEventListener('drop', gestionarDrop, false);
    });

    var llenado = document.querySelectorAll('.llenado');
    [].forEach.call(llenado, function(lle){
        lle.addEventListener('dragover', gestionarSobreDrag, false);
        lle.addEventListener('drop', gestionarDrop, false);
    });
    [].forEach.call(llenado, function(lle) {
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
        if(ev.target == recipiente[0]){
            omplirAigua();
        }
    }

    function omplirAigua(){
        let container = document.querySelector(".medidor");
        let aigua = document.createElement("div");
        aigua.className = "aigua";
        container.appendChild(aigua);
    }
    
}