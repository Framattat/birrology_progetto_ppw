//	GESTORI PAGINA

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

function gestoreClickTreBirre(){
  try {
		inizioGallery();
  } catch (e) {
		alert("gestoreTreBirre" + e);
  }   
}

function gestoreClickArrowSX(){
	try {
		Gallery( -1 );
  } catch (e) {
		alert("gestoreArrowSX" + e);
  }
} 

function gestoreClickArrowDX(){
	try {
		Gallery( +1 );
  } catch (e) {
		alert("gestoreArrowDX" + e);
  }
} 

// VARIABILI GLOBALI

var nodoBottoneBirra;
var nodoGalleriaImg;
var nodoGalleriaDesc;
var nodoGalleriaTitolo;
var nodoArrowSX;
var nodoArrowDX;
var nodoScrollUp;

var imgN;

// GESTORE LOAD

function gestoreLoad () {
	try {
		nodoBottoneBirra = document.getElementById("birraBottoneImg");
		nodoGalleriaImg = document.getElementById("galleryBirre");
		nodoGalleriaDesc = document.getElementById("galleryDesc");
		nodoGalleriaTitolo = document.getElementById("titoloGallery");
		nodoArrowSX = document.getElementById("arrowSX");
		nodoArrowDX = document.getElementById("arrowDX");
		nodoScrollUp = document.getElementById("loScroll");

		nodoScrollUp.onclick = gestoreClickScrollUp;
		nodoBottoneBirra.onclick = gestoreClickTreBirre;
		nodoArrowSX.onclick = gestoreClickArrowSX;
		nodoArrowDX.onclick = gestoreClickArrowDX;
		window.onscroll = gestoreScrollPagina;

		imgN= 0;
		Gallery(0);
	} catch (e) {
		alert("gestoreLoad" + e);
	}
}

// ONLOAD

window.onload = gestoreLoad;
