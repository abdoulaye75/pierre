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
var victoire;
var ordiTable = document.getElementById("ordi");


var images = document.querySelectorAll(".image");


	for (var i=0; i<images.length; i++){ // on parcourt le tableau qui contient toutes les balises de classe image
		
		

		images[i].addEventListener("click", function(){ /* au clic d'une image, l'image sélectionnée apparaît
			sur le bloc choix de l'utilisateur ET de l'ordi */

		var im = document.createElement("img");
		im.src= this.src; // récupère la valeur de src de chaque image
		joueurTable.appendChild(im);	
		choixJoueur = this.id; // récupère la valeur de l'id de chaque image


		var x = Math.random(); // l'ordi fait un choix aléatoire
		var srcOrdi = "";

// LES SITUATIONS POSSIBLES DANS DES CONDITIONS IF/ELSE IF ET SWITCH
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
	if (choixJoueur === "pierre") {
	switch (ordiChoix) {
	  case ordiPapier:
	  victoire = 1;
	  break;

	  case ordiPierre:
	  victoire = 3;
	  break;

	  case ordiCiseaux:
	  victoire = 1;
	  break;

	  case ordiSpock:
	  victoire = 2;
	  break;

	  case ordiLezard:
	  victoire = 1;
	  break;

	}

	}

	if (choixJoueur === "feuille") {

	switch (ordiChoix) {
	  case ordiPapier:
	  victoire = 3;
	  break;

	  case ordiPierre:
	  victoire = 1;
	  break;

	  case ordiCiseaux:
	  victoire = 2;
	  break;

	  case ordiSpock:
	  victoire = 1;
	  break;

	  case ordiLezard:
	  victoire = 2;
	  break;

	}

	}

	if (choixJoueur === "ciseaux") {

	switch (ordiChoix) {

	  case ordiPapier:
	  victoire = 1;
	  break;

	  case ordiPierre:
	  victoire = 2;
	  break;

	  case ordiCiseaux:
	  victoire = 3;
	  break;

	  case ordiSpock:
	  victoire = 1;
	  break;

	  case ordiLezard:
	  victoire = 1;
	  break;

	}

	}

	if (choixJoueur === "spock") {

	switch (ordiChoix) {

	  case ordiPapier:
	  victoire = 2;
	  break;

	  case ordiPierre:
	  victoire = 1;
	  break;

	  case ordiCiseaux:
	  victoire = 1;
	  break;

	  case ordiSpock:
	  victoire = 3;
	  break;

	  case ordiLezard:
	  victoire = 1;
	  break;

	}

	}

	if (choixJoueur === "lezard") {

	switch (ordiChoix) {

	  case ordiPapier:
	  victoire = 1;
	  break;

	  case ordiPierre:
	  victoire = 2;
	  break;

	  case ordiCiseaux:
	  victoire = 2;
	  break;

	  case ordiSpock:
	  victoire = 1;
	  break;

	  case ordiLezard:
	  victoire = 3;
	  break;

	}

	}





			console.log(ordiChoix);	
			console.log(srcOrdi);

			var imOrdi = document.createElement("img"); // on insère l'image qui correspond au choix de l'ordi
		imOrdi.src= srcOrdi;
		ordiTable.appendChild(imOrdi);	
		






// la fin de jeu
	if (victoire===1){

	 resultat.innerHTML="YOU WIN!";
	}
	else if (victoire === 2){
	resultat.innerHTML="YOU LOOSE! HA HA HA!";
	}
	else if (victoire === 3) {
	resultat.innerHTML="Equality!";
	}
	});
	}