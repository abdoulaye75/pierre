var choixJoueur="";
var joueurTable = document.getElementById("joueurTable");
var pierre= document.getElementById("pierre");
var feuille= document.getElementById("feuille");
var ciseaux= document.getElementById("ciseaux");
var spock= document.getElementById("spock");
var lezard= document.getElementById("lezard");
var resultat = document.getElementById("resultat");			
var ordiChoix="";
var ordiPapier="feuille";
var ordiPierre="pierre";
var ordiCiseaux="ciseaux";
var ordiSpock="spock";
var ordiLezard="lezard";
var victoire=true;
var ordiTable = document.getElementById("ordi");


var images = document.querySelectorAll(".image");


	for (var i=0; i<images.length; i++){
		
		

		images[i].addEventListener("click", function(){

		var im = document.createElement("img");
		im.src= this.src;
		joueurTable.appendChild(im);	
		choixJoueur = this.id;


		var x = Math.random();
		var srcOrdi = "";

	if(x >= 0 && x <= 0.19){
	  ordiChoix = ordiPapier;
	   srcOrdi = images[1].src;
	}
	else if (x >= 0.20 && x <= 0.39) {
	  ordiChoix = ordiPierre;
	   srcOrdi = images[0].src;
	}
	else if (x >= 0.40 && x <= 0.59) {
	  ordiChoix = ordiCiseaux;
	   srcOrdi = images[2].src;
	}
	else if (x >= 0.60 && x <= 0.79) {
	  ordiChoix = ordiSpock;
	   srcOrdi = images[3].src;
	}

	else if (x >= 0.80 && x <= 0.99) {
	  ordiChoix = ordiLezard;
	   srcOrdi = images[4].src;
	}
	if (choixJoueur = "pierre") {
	switch (ordiChoix) {
	  case ordiPapier:
	  victoire = false;
	  break;

	  case ordiPierre:
	  victoire = false;
	  break;

	  case ordiCiseaux:
	  victoire = true;
	  break;

	  case ordiSpock:
	  victoire = false;
	  break;

	  case ordiLezard:
	  victoire = true;
	  break;

	}

	}

	if (choixJoueur = "feuille") {

	switch (ordiChoix) {
	  case ordiPapier:
	  victoire = false;
	  break;

	  case ordiPierre:
	  victoire = true;
	  break;

	  case ordiCiseaux:
	  victoire = false;
	  break;

	  case ordiSpock:
	  victoire = true;
	  break;

	  case ordiLezard:
	  victoire = false;
	  break;

	}

	}

	if (choixJoueur = "ciseaux") {

	switch (ordiChoix) {

	  case ordiPapier:
	  victoire = true;
	  break;

	  case ordiPierre:
	  victoire = false;
	  break;

	  case ordiCiseaux:
	  victoire = false;
	  break;

	  case ordiSpock:
	  victoire = false;
	  break;

	  case ordiLezard:
	  victoire = true;
	  break;

	}

	}

	if (choixJoueur = "spock") {

	switch (ordiChoix) {

	  case ordiPapier:
	  victoire = false;
	  break;

	  case ordiPierre:
	  victoire = true;
	  break;

	  case ordiCiseaux:
	  victoire = false;
	  break;

	  case ordiSpock:
	  victoire = false;
	  break;

	  case ordiLezard:
	  victoire = false;
	  break;

	}

	}

	if (choixJoueur = "lezard") {

	switch (ordiChoix) {

	  case ordiPapier:
	  victoire = true;
	  break;

	  case ordiPierre:
	  victoire = false;
	  break;

	  case ordiCiseaux:
	  victoire = false;
	  break;

	  case ordiSpock:
	  victoire = true;
	  break;

	  case ordiLezard:
	  victoire = false;
	  break;

	}

	}





			console.log(ordiChoix);	
			console.log(srcOrdi);

			var imOrdi = document.createElement("img");
		imOrdi.src= srcOrdi;
		ordiTable.appendChild(imOrdi);	
		







	if (victoire===true){

	 resultat.innerHTML="<p>YOU WIN!</p>";
	}else{
	resultat.innerHTML="<p>YOU LOOSE! HA HA HA!</p>";

		}
	});
	}