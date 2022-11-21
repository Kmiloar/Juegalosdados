//Jugador 1//
var numAleatorio = Math.floor(Math.random()*6)+1;

var imgAleatorio = "dice" + numAleatorio + ".png";

var imgFuente = "./Imagenes/" + imgAleatorio;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", imgFuente);

//Jugador 2//
var numAleatorio2 = Math.floor(Math.random()*6)+1;

var imgAleatorio2 = "dice" + numAleatorio2 + ".png";

var imgFuente2 = "./Imagenes/" + imgAleatorio2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", imgFuente2);

if (numAleatorio > numAleatorio2) {
    document.querySelector("h1").innerHTML = "🚩 Ganó el jugador 1 🚩";
} else if (numAleatorio2 > numAleatorio) {
        document.querySelector("h1").innerHTML = "🚩 Ganó el jugador 2 🚩";
    } else {
        document.querySelector("h1").innerHTML = "😕 Vuelve a intentarlo 😕";
    }
