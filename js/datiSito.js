 /*   Ho voluto creare un database poiché nella dispensa ho notato che il questionario aveva un proprio database, quindi ho pensato di crearne uno per
		tutte le pagine in maniera che potessero condividerlo, così se in una pagina web dovessi aver bisogno di un vettore posso richiamarlo tranquillamente
 */
// DATI CURIOSITÀ INDEX 

const vettCuriosita = [
	"La birra non ha sempre un gusto erbaceo ed amaro, esistono un sacco di tipi differenti!",
	"La birra è la bevanda alcoolica più diffusa al mondo!",
	"Nel passato la birra salvava la vita! Questo perché i luppoli contenuti in essa hanno un effetto battericida, quindi a volte la birra era più pulita dell'acqua!",
	"Si ritiene che la birra sia sta creata per sbaglio: In antichità per produrre del pane è stata versata più acqua e la birra è nata!",
	"La birra è un toccasana per la salute (se consumata responsabilmente) dato che contiene i 12 minerali essenziali alla vita umana.",
	"Il colore della birra non indica il grado alcoolico bensì indica la tostatura del malto di cui essa è prodotta.",
	"Alcune birre sono particolarmente dolci, questo perché viene aggiunto nel mosto... Zucchero candito! ",
	"Esistono birre la cui gradazione alcoolica è di ben 50 gradi alcoolici.",
	"Alcune birre presentano il marchio 'Trappista', sono soltato 12 e sono prodotte da veri monaci trappisti!",
	"Quasi tutte le birre che vengono prodotte industrialmente sono pastorizzate e filtrate, in questo modo si perdono i sentori presenti nella birra!",
	"In Italia la birra artigianale è esplosa da poco, ma i numeri sono già impressionanti: più di 1500 microbirrifici in attività nel 2019!",
	"Per ogni stile birrario corrisponde, all'incirca, un bicchiere differente!",
	"Molti sono gli ingredienti che possono comporre una birra, ma alcuni sono proprio pazzeschi! Un esempio? Ostriche!",
	"La paura di un boccale vuoto ha un nome! Si chiama Cenosillicafobia.",
	"La bottiglia di birra più cara? È la Vielle Bon Securs prezzo: 1000 $ a bottiglia. Si trova al Bierdrome di Londra.",
	"L'IPA, ora diffusa come APA (IPA Americane), è stata inventata casualmente. Per conservarla meglio vennero aggiunti alla birra più luppoli e resa più alcoolica."
];

// DATI GALLERY BIRRA

const vettImg = [	
	"img/imgBirra/gallery1.jpg", 
	"img/imgBirra/gallery2.jpg", 
	"img/imgBirra/gallery3.jpg"
];

const vettDesc = {
	"img/imgBirra/gallery1.jpg" : "Le basse fermentazioni si sono diffuse da poco a causa dell'invenzione del freddo artificiale, che permette di mantenere una temperatura bassa durante la fermentazione. La Pils è lo stile più caratteristico delle Lager ed è diffuso in tutta Europa: si presenta come una birra chiara e limpida con schiuma bianca, all'olfatto si percepisce l'odore del malto poco tostato, al gusto è dolciastra e presenta sentori di panificato, con un finale amaro (erbaceo) e asciutto in bocca. Altri esempi di birre a bassa fermentazione sono: Bock, Dunkel, Hell, Rauchbier e Dortmunder.",
	"img/imgBirra/gallery2.jpg" : "Le alte fermentazioni sono una categoria vastissima, questo perché erano le birre più diffuse fino alla 'scoperta' delle Lager. La India Pale Ale (IPA) Americana è la birra più diffusa al momento, deriva da un altro stile chiamato Pale Ale. Lo stile presentato nella foto è una Stout: una birra scura con schiuma beige, all'olfatto si percepiscono odori di caffè, cioccolato e di malto molto tostato, al gusto la birra presenta gli stessi sentori però in base alla variante della Stout si possono avvertire aromi dolciastri, lattiginosi o d'orzo. Una piccola parte di Ales sono: Brown Ale, Porter, Trappiste, Belgian Ale, Golden Ale, Barley Wine, Scottish Ale, IPA e Gose .",
	"img/imgBirra/gallery3.jpg" : "Le birre a fermentazione spontanea sono le prime birre a esser state prodotte a causa della loro 'semplicità': acqua e malto d'orzo lasciati a fermentare all'aria. Queste birre sono state raffinate dall'arte Belga creando degli stili detti 'Lambic', il più famoso: il Kriek è uno stile che aggiunge alla birra in maturazione amarene o ciliegie. In foto vediamo una Geuze, una birra ambrata con una schiuma bianca, all'olfatto si percepisce un odore di batterio lattico ma il gusto cambia completamente con delle note dolciastre che ricordano quasi uno spumante, ha un finale acido che lascia la bocca pulita a causa della salivazione scaturita dalla degustazione. I Lambic non sono molti, ma alcuni esempi sono: Kriek, Framboise e Faro. "
};
const vettTitoli = [	
	"Lager", 
	"Ales", 
	"Lambic"
];

// DATI QUESTIONARIO STILE 

/**/ const questionario = [
/**/  { // domanda 1
/**/   domanda : "Che birra cerchi?",
/**/   risposte : [ "Chiara", "Ambrata", "Scura" ],
/**/  },
/**/  { // domanda 2
/**/   domanda : "Come vuoi che sia la tua birra?",
/**/   risposte : [ "Dolce", "Amara", "Acida" ],
/**/  },
/**/  { // domanda 3
/**/   domanda : "Scegli un tratto caratteristico della tua birra!",
/**/   risposte : [ "Maltosa" ,"Fruttata", "Caramellata" ],
/**/  }
/**/ ];

const scorrimentoStileImg = [ 
	"img/imgBirra/loStile2.jpg",
	"img/imgBirra/loStile3.jpg",
	"img/imgBirra/loStile4.jpg", 
	"img/imgBirra/loStile5.jpg"
];

const profiliRisp = [
	[1,1,1],
	[1,1,3],
	[1,2,1],
	[1,2,2],
	[1,3,2],
	[2,1,1],
	[2,1,3],
	[2,2,1],
	[2,2,3],
	[2,3,2],
	[2,3,3],
	[3,1,1],
	[3,1,3],
	[3,2,2],
	[3,3,2],
	[1,2],
	[1,1,2]
];

const profili = [
	"Birra: Helles, una birra a bassa fermentazione proveniente dalla Germania. Birra poco amara con sentori di panificato e miele che si accompagna bene ad una pizza o carni poco grasse, beverina e molto rinfrescante. Se ti piace la Helles potrebbero piacerti anche gli stili Dunkel o Bock ",
	"Birra: Belgian Golden Ale, una birra ad alta fermentazione proveniente dal Belgio. Birra bilanciata con sentori di frutta matura e lievito che si accompagna bene a zuppe e carni rosse, beverina ma corposa. Se ti piace la Belgian Golden Ale potrebbero piacerti anche gli stili Dunkel o Bock ",
	"Birra: Pils, una birra a bassa fermentazione proveniente dalla Germania. Birra con finale amaricante con sentori di panificato e di leggera luppolatura che si accompagna bene quasi a tutto esclusi dolci o pietanze affumicate, molto beverina e molto rinfrescante. Se ti piace la Pils potrebbero piacerti anche gli stili IPA Americana o Helles",
	"Birra: IPA, una birra ad alta fermentazione proveniente dall'Inghilterra ma oggigiorno prodotta principalmente in America chiamata a volte APA (American Pale Ale). Birra amara con forti sentori di luppolatura e frutta (a seconda del luppolo usato), beverina e molto rinfrescante. Se ti piace la IPA potrebbero piacerti anche gli stili Pils o Bitter Ale",
	"Birra: Birra Fruttata, birre a fermentazione spontanea provenienti dal Belgio o America. Birre acide con sentori dolci, aspri e fruttosi (in base alla frutta utilizzata) che si accompagna bene a dolci burrosi e non, complessa può non piacere a causa della sua acidità. Le birre fruttate sono diverse, provane alcune e vedi quali preferisci!",
	"Birra: Bock, una birra a bassa fermentazione proveniente dalla Germania. Birra dal sapore maltato con sentori di caramello dato dal malto, 'crosta' di dolce cotta che si accompagna bene alla carne di maiale o formaggi a pasta molle, corposa una birra che scalda il corpo. Se ti piace la Bock potrebbero piacerti anche gli stili Brown Ale o Dunkel ",
	"Birra: Dunkel, una birra a bassa fermentazione proveniente dalla Germania. Birra dolciastra con sentori di caramello mou e che si accompagna bene ad insaccati e carni rosse, leggera e bilanciata. Se ti piace la Dunkel potrebbero piacerti anche gli stili Brown Ale e Helles",
	"Birra: Bitter Ale, una birra ad alta fermentazione proveniente dall'Inghilterra. Birra amara attenuata dal caramello dato dal malto tostato forti sentori di luppolo 'terroso' e di caramello mou che si accompagna bene alle carni rosse , beverina con finale dolciastro. Se ti piace la Bitter Ale potrebbero piacerti anche gli stili Pils o Pale Ale",
	"Birra: Brown Ale, una birra ad alta fermentazione proveniente dall'Inghilterra. Birra dolce e maltata con forti sentori di caramello e malto tostato che si accompagna bene ad un dolce o una crostata, è una birra corposa. Se ti piace la Brown Ale potrebbero piacerti anche gli stili Dunkel o Trippel",
	"Birra: Kriek, una birra a fermentazione spontanea proveniente dal Belgio. Birra acidula con forti sentori di ciliegia, che si accompagna bene a dolci burrosi o con frutti di bosco, molto dolce e facilmente apprezzabile nonostante l'acidità. Se ti piace la Kriek potrebbero piacerti anche gli stili Faro o altre birre lambic fruttate",
	"Birra: Faro, una birra a fermentazione spontanea proveniente dal Belgio. Birra dolce/acida molto dolce e zuccherina che si accompagna bene ad un dolce burroso e non, molto zuccherosa e poco alcoolica. Se ti piace la Faro potrebbero piacerti anche gli stili Geuze o Helles",
	"Birra: Stout, una birra ad alta fermentazione proveniente dall'Inghilterra. Birra bilanciata con sentori di caffè e di cioccolato (variano in base alla Stout) che si accompagna bene ad un dolce al cioccolato o caffè, le Stout sono corpose e cariche di gusto. Se ti piace le Stout potrebbero piacerti anche gli stili Porter, le Stout sono tante ognuna con una sua peculiarità, provale!",
	"Birra: Quadruppel, una birra ad alta fermentazione proveniente dal Belgio. Birra molto dolce e zuccherina con sentori di zucchero candito e di caramello bruciato buona per pasteggiare dopo una cena molto carica, molto corposa e carica di gusto. Se ti piace la Quadruppel potrebbero piacerti anche gli stili Stout o Barley Wine",
	"Birra: Black IPA, una birra ad alta fermentazione proveniente dall'America. Birra amara con sentori di orzo e luppolatura pesante che si accompagna bene ad una minestra di legumi o pasteggiata da sola, corposa e intensa. Se ti piace la Black IPA potrebbero piacerti anche gli stili IPA Americana o la White IPA ",
	"Birra: Lambic al mirtillo, una birra a fermentazione spontanea proveniente dal Belgio. Birra Lambic con aggiunta di mirtillo nero, acida aspra ma dolciastra allo stesso tempo, che si accompagna a dolci ai frutti rossi, complessa da degustare e dal gusto 'difficile'. Se ti piace il Lambic al mirtillo potrebbero piacerti anche gli altri Lambic alla frutta, ce ne sono molti da provare!",
	"Davvero? Una 'Chiara' e 'Amara'? Certamente non ti consiglio una Tennets...",
	"Beh questo profilo corrisponde ad una Fanta... quindi posso consigliarti una freschissima Fanta?"
];
