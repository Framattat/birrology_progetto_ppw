/*	Ho voluto creare una libreria in comune per tutte le pagine del sito web dopo aver visto nella dispensa che nella parte del questionario veniva usata una libreria,
	a differenza del database(dove non è stato sfruttato questo vantaggio), mi è tornato utile perché alcune funzioni vengono richiamate da più pagine del sito.
*/

// LIBRERIA PAGINE

// La funzione crea un nodo di testo col parametro "messaggio" e lo appende al parametro "nodo" selezionato. 

function scriviMessaggio (nodo, messaggio) {
   tempText = document.createTextNode(messaggio);
   nodo.appendChild(tempText);
}

/*  La funzione controlla inizialmente se l'utente ha eseguito 20px di scroll dalla cima della pagina e rende il nodo ScrollUp visibile,
se l'utente torna in cima lo rende invisibile. */

function ScrollPagina() {
   if (document.documentElement.scrollTop > 20) {
   	nodoScrollUp.style.display = "block";
   } else {
   	nodoScrollUp.style.display = "none";
   }
} 

/* LIBRERIA INDEX	
La funzione rimuove dal nodo di testo associato il testo, dopodichè ne appende uno nuovo in base all'indice di vettCuriosita, 
infine controlla la lunghezza del vettore se è uguale viene mostrato il nodoEnd (un messaggio di "fine curiosità") sennò il vettore 
continua il suo ciclo nelle curiosità rimaste(aumenta l'indice e rientra in se stessa con l'indice aggiornato dopo 8.5 secondi).  */ 

function Curiosita (i){ 
   nodoCur.removeChild(nodoCur.firstChild);
   scriviMessaggio(nodoCur, vettCuriosita[i]);
   if( i == vettCuriosita.length ) {
      nodoCur.style.display = "none";
      nodoEnd.style.display = "block";
   } else {
   	i++;
      setTimeout(Curiosita, 8500, i);
   } 
}

/* La funzione prende tre parametri: nodo, x e z: x è la distanza dello scroll dell'utente e z è un flag che ho messo
	per identificare la pagina, quindi solo una pagina che utilizza la funzione l'immagine apparirà e scomparirà con lo scroll
*/

function Animazione(nodo,x,z){ 
	if (document.documentElement.scrollTop < x) {
		if( z === 1) {
			nodo.style.display = "none";
		}
   } else {
   	nodo.style.display = "inline-block";
	}
} 

/* LIBRERIA BIRRA
La funzione prende gli id di due sezioni dell'html rendendo visibile quello della gallery e invisibile il bottone, fa parte di un gestore che fa comparire la gallery.
*/

function inizioGallery () {
	var nodoTreBirre = document.getElementById("leTreBirre");
	var nodoTreBirreClick = document.getElementById("leTreBirreClick");
	nodoTreBirre.style.display = "none";
	nodoTreBirreClick.style.display = "block";
}

/* Simile alla funzione curiosita, la differenza sostanziale è che il ciclo nel vettore non è automatico ma viene gestito grazie ad un parametro "i"
	passato dall'utente nei gestoriClickSXDX, "i" assume due valori "+1" o "-1" la funzione controlla il valore ed in base ad esso scorre dall'inizio o
	dalla fine del vettImg. 
*/ 

function Gallery(i){
   imgN += i;
   if(imgN > vettImg.length - 1 ) {
      imgN = 0;
   } 
   if( imgN < 0 ) {
      imgN = vettImg.length - 1;
   }
   nodoGalleriaImg.src = vettImg[imgN] ;
   nodoGalleriaDesc.removeChild(nodoGalleriaDesc.firstChild);
	scriviMessaggio(nodoGalleriaDesc, vettDesc[vettImg[imgN]]);
	nodoGalleriaTitolo.removeChild(nodoGalleriaTitolo.firstChild);
   scriviMessaggio(nodoGalleriaTitolo, vettTitoli[imgN]);
}

/* LIBRERIA STILE 
La funzione cerca in un vettore di profili il vettore che l'utente ha creato nel questionario: il primo ciclo controlla che 
la lunghezza del vettore "risposte" corrisponda alla lunghezza di un elemento del vettore dei profili(scorrendo l'indice) 
e setta un vettore current con il primo profilo che corrisponde alla ricerca. 
Successivamente confronta gli elementi del vettore risposte dell'utente con quelli di current se: tutti gli elementi corrispondono
(quindi controlla la lunghezza intera senza uscire dal ciclo) restituisce "i" ovvero l'indice che servirà per l'associazione al profilo corrispondente
oppure se ciò non accade la funzione restituisce una variabile "x" di valore "-1" (servirà al gestore per dichiarare un messaggio di errore). */ 

function cercaProfilo(){
	var j, current;
	for(i = 0; i < profiliRisp.length; ++i){
	  if(risposte.length === profiliRisp[i].length){
			current = profiliRisp[i];
			for(j = 0; j < risposte.length && risposte[j] === current[j]; ++j);
			if(j === risposte.length)
		 // i è dichiarata nell'ambiente globale così come x
				return i;
		}
	}
	return x = -1;
}

/* (DISPENSA JS: QUESTIONARIO) La funzione aggiorna le domande e le risposte del questionario, passando per la funzione scriviMessaggio precedentemente
descritta, inoltre rende le risposte non verificate così che l'utente possa cliccarci e verificarle.
*/

/**/function aggiornaDomanda (x) {
/**/	scriviMessaggio(nodoNumeroDomanda, "Domanda " + (x + 1) + " di " + numeroDomande);
/**/	var parte = questionario[x];
/**/	scriviMessaggio(nodoTestoDomanda, parte.domanda)
/**/	scriviMessaggio(nodoTestoRisposta0, parte.risposte[0]);
/**/	scriviMessaggio(nodoTestoRisposta1, parte.risposte[1]);
/**/	scriviMessaggio(nodoTestoRisposta2, parte.risposte[2]);
/**/	nodoRisposta0.checked = false;
/**/	nodoRisposta1.checked = false;
/**/	nodoRisposta2.checked = false;
/**/}

// La funzione rende invisibile le domande e risposte e rende visibile il tasto riprova, questo perché fa parte di un gestore che mostra il risultato.

function fineQuestionario(){
	nodoSezioneDomande.style.display="none";
	nodoRestart.className = "riprovaClick";
}

// La funzione scorre in un vettore di immagini grazie ad un parametro y passato da un gestore e cancella le risposte così che il questionario continui.

function refreshQuestionario (y) {
	scorr+= y;
	nodoImmaginiQuiz.src = scorrimentoStileImg[scorr];
	nodoNumeroDomanda.removeChild(nodoNumeroDomanda.firstChild);
	nodoTestoDomanda.removeChild(nodoTestoDomanda.firstChild);
	nodoTestoRisposta0.removeChild(nodoTestoRisposta0.firstChild);
	nodoTestoRisposta1.removeChild(nodoTestoRisposta1.firstChild);
	nodoTestoRisposta2.removeChild(nodoTestoRisposta2.firstChild);
}

/* La funzione fa iniziare il questionario, nascondendo l'introduzione e rendendo visibile le domande del questionario, 
dopo fa partire il n delle domande da 0 e crea un vettore di risposte che l'utente riempirà.
*/ 

function iniziaQuestionario () {
	var nodoDescInizio = document.getElementById("interfacciaIniziale");
	var nodoInterfaccia = document.getElementById("interfacciaQuest");
	nodoDescInizio.style.display = "none";
	nodoInterfaccia.className = "stileQuestionarioClick";
	numeroDomandaCorrente = 0;
	aggiornaDomanda(numeroDomandaCorrente);
	risposte= new Array();
}
