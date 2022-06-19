document.getElementById('player').addEventListener("mouseover", sumarPuntos);

var puntos = 0;
tiempo = 60;
necesarios = 100;

function sumarPuntos() {
    puntos++;
    document.getElementById('puntos').innerHTML = "Puntos:<b>" + puntos + "/" + necesarios + "</b>";
    randNum = Math.round(Math.random() * 500);
    randNum2 = Math.round(Math.random() * 500);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if (puntos == 100) {
        alert("Hey colega has acomulado los suficientes puntos");
    }
}


function restarTiempo() {
    tiempo--
    document.getElementById("tiempo").innerHTML = "  Tiempo: " + tiempo;
    if (tiempo == 0) {
        alert("Intento fallido");
        tuempo = 0;
        puntos = 0;
    }
}

setInterval(restarTiempo, 1000);