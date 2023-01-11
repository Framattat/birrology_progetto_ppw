// GESTORI PAGINA

function gestoreScrollPagina () {
	try {
		var cima = 100;
		var pagina = 1;
		var nodoImmagineComparsa = document.getElementById("curiositaComparsa");
		ScrollPagina();
		Animazione(nodoImmagineComparsa, cima, pagina);
	} catch (e) {
		alert('gestoreScrollPagina ' + e);
	}
}

function gestoreClickScrollUp() {
	try {
		document.documentElement.scrollTop = 0;
	} catch (e) {
		alert("gestoreScrollUp" + e);
	}
}

function gestoreClickStart (){ 
	try {
		nodoCur.style.display = "block";
		nodoStart.style.display = "none" ;
		Curiosita(0);
	} catch (e) {
		alert("gestoreStart" + e);
	}
}
 
// VARIABILI GLOBALI

var nodoCur;
var nodoStart;
var nodoEnd;
var nodoScrollUp;

// GESTORE LOAD

function gestoreLoad () {
	try {
		nodoCur = document.getElementById("randomCuriosita");
		nodoStart = document.getElementById("pulsanteInizio");
		nodoEnd = document.getElementById("fineCuriosita");
		nodoScrollUp = document.getElementById("loScroll");

		nodoStart.onclick = gestoreClickStart ;
		nodoScrollUp.onclick = gestoreClickScrollUp;
		window.onscroll = gestoreScrollPagina;
	} catch (e) {
		alert("gestoreLoad" + e);
	}
}

// ONLOAD 

window.onload = gestoreLoad;
