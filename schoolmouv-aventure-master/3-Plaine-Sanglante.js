/*
  Les Plaines grouilles de nuisibles, parfois seuls et faibles, parfois forts, et parfois en
  trop grand nombre. Il va falloir trouver la meilleure stratégie à adopter, combattre, ou fuir!

  Exercice : Votre personnage a 20 points de vie, votre arme fait 5 dégâts, votre 
  bouclier diminue les dégâts subis de 2. Les monstres, n'ont pas de boucliers, et 
  sont représentés comme ci [points de vie, dégâts] (ex: [15, 3] le monste a 15 points de vie et fait
  3 de dégats). 
  Les combats sont découpés en tours, à chaque tour, le héros et le(s) monstre(s) 
  attaquent une fois (les points de vie de chacun baissent). Si un monstre à 0 ou moins de vie,
  il meurt et n'attaque donc pas pour le tour, même chose pour le héros. Si il n'y a plus de monstre,
  le héros remporte la victoire. Le héros ne peut taper qu'un seul monstre à la fois mais 
  il choisit celui qui frappe le plus fort s'il y'en a un. C'est toujours lui qui attaque en premier.

  Complétez la fonction engagerLeCombat qui doit retourner true si le héros devrait gagner
  le combat, false si il doit fuir!
*/

"use strict";

function engagerLeCombat(groupeMonstres) {
  let heros = {
    pointsDeVie: 20,
    degats: 5,
    protection: 2
  }

  let herosEstVivant = true;
  let monstresTousMorts = false;
  let monstresRestants = groupeMonstres;

  if (typeof groupeMonstres[0] == "number") {
    while (herosEstVivant && monstresRestants[0] > 0) {
      monstresRestants[0] -= heros.degats;
      if (monstresRestants[0] > 0) {
        heros.pointsDeVie -= monstresRestants[1] - heros.protection;
        herosEstVivant = heros.pointsDeVie > 0;
      } else {
        monstresTousMorts = true;
      }
    }
  } else {
    while (herosEstVivant && !monstresTousMorts) {
      //Attaquer le monstre le plus fort
      monstresRestants[renvoyerMonstreLePlusFort(monstresRestants)][0] -= heros.degats;

      //Mettre à jours les monstres restants
      monstresRestants = monstresToujoursEnVie(groupeMonstres);

      //Chaque monstre attaque
      monstresRestants.forEach(monstre => heros.pointsDeVie -= monstre[1] - heros.protection);

      //On vérifie les flags
      herosEstVivant = heros.pointsDeVie > 0;
      monstresTousMorts = monstresRestants.length == 0;
    }
  }
  return herosEstVivant && monstresTousMorts;
}

function monstresToujoursEnVie(groupeMonstres) {
  return groupeMonstres.filter(monstre => monstre[0] > 0);
}

function renvoyerMonstreLePlusFort(groupeMonstres) {
  return groupeMonstres.reduce((indexMonstreLePlusFortPrecedent, monstreCourant, indexMonstreCourant) =>
    monstreCourant[1] > groupeMonstres[indexMonstreLePlusFortPrecedent][1] ? indexMonstreCourant : indexMonstreLePlusFortPrecedent, 0);
}



const groupeMonstres1 = [10, 3];
const groupeMonstres2 = [
  [15, 3],
  [12, 6]
];
const groupeMonstres3 = [
  [6, 3],
  [6, 3],
  [6, 3],
  [6, 3]
];
const groupeMonstres4 = [
  [20, 5],
  [20, 5]
];

console.log(
  'Groupe Monstres 1 : ' + (engagerLeCombat(groupeMonstres1) === true ? 'OK' : 'KO'),
);
console.log(
  'Groupe Monstres 2 : ' + (engagerLeCombat(groupeMonstres2) === true ? 'OK' : 'KO'),
);
console.log(
  'Groupe Monstres 3 : ' + (engagerLeCombat(groupeMonstres3) === true ? 'OK' : 'KO'),
);
console.log(
  'Groupe Monstres 4 : ' + (engagerLeCombat(groupeMonstres4) === false ? 'OK' : 'KO'),
);

/* 
  Après avoir survécu à cet enfer, vous arrivez enfin devant les portes de la
  belle ville de Tolosa. Mais deux gardes semblent bloquer l'entrée principale...
*/