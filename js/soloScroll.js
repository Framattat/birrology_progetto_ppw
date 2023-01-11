 // GESTORI PAGINA

 function gestoreScrollPagina() {
	try {
		ScrollPagina();
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

// VARIABILI GLOBALI 

var nodoScrollUp;

// GESTORE LOAD

function gestoreLoad () {
	try {
		nodoScrollUp = document.getElementById("loScroll");
		
		nodoScrollUp.onclick = gestoreClickScrollUp;
		
		window.onscroll = gestoreScrollPagina;
	} catch (e) {
		alert('gestoreLoad ' + e);
	}
}

// ONLOAD  

window.onload = gestoreLoad;
