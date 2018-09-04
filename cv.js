  console.log ("hello");

 //M.AutoInit(); // initialise tous les compo bootsrap : ! pas d'option possible avec cette methode !

 //Init galerie photos " mes passions"  a cacher a l'affichage
 $(document).ready(function(){
    $('.carousel').carousel();
  });

 //bouton Flottant => changer couleur css
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });
// menu cllapsible
$(document).ready(function(){
    $('.collapsible.popout').collapsible();
  });
$(document).ready(function(){
$('.dropdown-trigger').dropdown();
});

// initialisation des variables

var expe = $("#expe");
var perso = $("#perso");
var pro = $("#pro");
var identite = $("#identite");

// GESTION DES EVENEMENTS

	$("#expe").hide();
	$("#perso").hide();


pro.click (function(){
	expe.show();
});

identite.click(function(){
	perso.show();
});