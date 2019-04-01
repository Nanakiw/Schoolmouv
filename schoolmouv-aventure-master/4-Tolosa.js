/*
  En vous positionnant en retrait, vous remarquez que les 2 gardes semblent
  jouer aux douaniers. Ils prélèvent de l'argent suivant un rythme que vous 
  avez percé. Philippe prend 5 pièces tous les 3 passants et Amed 3 pièces tous
  les 5 passants.
  Les monstres n'ayant aucun attrait pour l'argent, vos poches sont toujours vides,
  et il va falloir calculer votre coup pour bien vous positionner dans la file et 
  éviter d'avoir à payer le tribut.

  Exercice : Des groupes de gens arrivent petit à petit pour se mettre dans la file qui 
  contient déjà 56 personnes. Ils sont représentés comme suit : [3, 4, 2, 5] cela veut
  dire qu'un groupe de 3 personnes va s'ajouter à la file, puis 4, puis 2 et enfin 5.
  Ils sont indissociables, vous devez donc vous placer avant ou après eux 
  (vous êtes donc au mieux le 57ème de la file).
  On considère que les gardes commencent avec ce groupe de 56, donc la 1ère et seconde personne
  ne seront pas ponctionnées, la 3ème personne sera ponctionnée par Philippe, la 4ème pas de
  ponction et la 5ème par Amed, puis ainsi de suite.
  
  Complétez la fonction trouverSaPlace qui doit renvoyer la position dans le tableau à
  laquelle s'insérer pour éviter le paiement.
*/

"use strict";

function trouverSaPlace(groupes) {
  let positionDansTableau = 0;
  let positionDansFile = 56;
  for (let i = 0; (i < groupes.length); i++) {
      positionDansTableau = i+1;
      positionDansFile += groupes[i];
      if (estPonctionne(positionDansFile+1) == false) {
        break;
      }
  }
  return positionDansTableau;
}

function estPonctionne(position) {
  return position % 3 == 0 || position % 5 == 0;
}



const groupe1 = [1, 2, 3];
const groupe2 = [3, 2, 1];
const groupe3 = [3, 5, 2];

console.log('Groupe 1 : ' + (trouverSaPlace(groupe1) === 1 ? 'OK' : 'KO'));
console.log('Groupe 2 : ' + (trouverSaPlace(groupe2) === 2 ? 'OK' : 'KO'));
console.log('Groupe 3 : ' + (trouverSaPlace(groupe3) === 3 ? 'OK' : 'KO'));

/*
  Vous passez avec brio les 2 gardes et vous entrez enfin dans la belle Tolosa.
  Pas de temps à perdre, vous connaissez votre route, la grand place Glassdoor ou un 
  grand nombre de guildes ont leur devanture.
  Il en est une qui attire particulièrement votre attention, vous vérifiez que votre
  bouclier est bien arnaché, que votre épée est bien dans son fourreau et vous avancez
  vers Schoolmouv...
*/