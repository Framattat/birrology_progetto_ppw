//GESTORI PAGINA 

function gestoreScrollPagina () {
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

function gestoreClickReset () {
	try {
		window.location.reload();
	} catch ( e ) {
		alert("gestoreClickReset " + e);
	}
}

function gestoreClickAvanti () {
	try {
		refreshQuestionario( +1 );
		if (nodoRisposta0.checked === true) {
			risposte.push(1);
		}  
		if (nodoRisposta1.checked === true) {
			risposte.push(2);
		}
		if (nodoRisposta2.checked === true) {
			risposte.push(3);
		}
		numeroDomandaCorrente++; 
		if( numeroDomandaCorrente < numeroDomande) {
			aggiornaDomanda(numeroDomandaCorrente);
		} else {
			cercaProfilo();
			fineQuestionario();
			if(x === -1) {
				scriviMessaggio(nodoRisultato,errore);
				nodoImmaginiQuiz.style.display="none";
				nodoErrore.className = "bicchiereVuotoClick";
			} else {
				scriviMessaggio(nodoRisultato,profili[i]);
			}	
		}
	} catch ( e ) {
		alert("gestoreClickAvanti " + e);
	}	
}

function gestoreClickInizia () {
	try {
		iniziaQuestionario();
	} catch ( e ) {
		alert("gestoreClickInizia " + e);
	}
}

// VARIABILI GLOBALI 

const errore= "Il nostro database non ha trovato una birra per te! Ci dispiace!";

/**/var nodoNumeroDomanda;
/**/var nodoTestoDomanda;
/**/var nodoRisposta0;
/**/var nodoTestoRisposta0;
/**/var nodoRisposta1;
/**/var nodoTestoRisposta1;
/**/var nodoRisposta2;
/**/var nodoTestoRisposta2;
/**/var nodoAvanti;
/**/var nodoRisultato;
/**/var nodoInizia;
var nodoErrore;
var nodoRestart;
var nodoImmaginiQuiz;
var nodoScrollUp;
var nodoSezioneDomande;

/**/var numeroDomande;
/**/var numeroDomandaCorrente;
var i;
var x;
var risposte;
var scorr;

// GESTORE LOAD 
function gestoreLoad () {
	try {
		/**/nodoNumeroDomanda = document.getElementById("numeroDomanda");
		/**/nodoTestoDomanda = document.getElementById("testoDomanda");
		/**/nodoRisposta0 = document.getElementById("risposta0");
		/**/nodoTestoRisposta0 = document.getElementById("testoRisposta0");
		/**/nodoRisposta1 = document.getElementById("risposta1");
		/**/nodoTestoRisposta1 = document.getElementById("testoRisposta1");
		/**/nodoRisposta2 = document.getElementById("risposta2");
		/**/nodoTestoRisposta2 = document.getElementById("testoRisposta2");
		/**/nodoAvanti = document.getElementById("avanti");
		/**/nodoRisultato = document.getElementById("risultato");
		/**/nodoInizia = document.getElementById("inizia");
		nodoErrore = document.getElementById("imgBirra404");
		nodoRestart = document.getElementById("riparti");
		nodoImmaginiQuiz = document.getElementById("scorrimentoImg");
		nodoScrollUp = document.getElementById("loScroll");
		nodoSezioneDomande = document.getElementById("stileDomande");

		/**/nodoAvanti.onclick = gestoreClickAvanti;
		/**/nodoInizia.onclick = gestoreClickInizia;
		nodoRestart.onclick = gestoreClickReset;
		nodoScrollUp.onclick = gestoreClickScrollUp;
		window.onscroll = gestoreScrollPagina;
		
		/**/numeroDomande = questionario.length;
		scorr=0;
		gestoreScrollPagina();
	} catch ( e ) {
		alert("gestoreLoad " + e);
	}
}

// ONLOAD

window.onload = gestoreLoad;