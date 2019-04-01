/* 
  Gladius est heureux d'avoir un nouvel élève mais selon lui, vous avez déjà l'étoffe d'un héros.
  Alors avant de vous laisser partir vers les Plaines Sanglante, il vous demande seulement
  de résoudre un petit soucis.
  Sa plume magique qui écrit tout ce qu'il raconte n'en fait qu'à sa tête et répète des lettres.
  Il va falloir la réparer!

  Exercice : Compléter la fonction plumeMagique qui doit retourner une string sans les répétitions de
  lettres à la suite et sans prendre en compte les majuscules.
*/

"use strict";

function plumeMagique(phrase) {
  //Je mets mes entrées en lowercases et j'en fais un tableau, 
  //après avoir enlevé les espaces éventuels au début et à la fin du mot
  phrase = phrase.toLowerCase().trim().split("");

  //j'initialise un tableau avec la premiere lettre du mot
  let finalString = [phrase[0]];
  //J'e ne rajoute que les lettres qui ne se répètent pas
  for (let i = 1; i < phrase.length; i++) {
    if (phrase[i - 1] != phrase[i]) {
      finalString.push(phrase[i]);
    }
  }
  //Je refais ma string a partir du tableau
  finalString = finalString.join("");
  return finalString;
}



const phrase1 = 'Reeeepassss';
const phrase2 = 'dddejJeunEeer';
const phrase3 = 'DddIiiiNnnnnnnEeRRRr';

console.log(
  'Phrase 1 : ' +
  (plumeMagique(phrase1).localeCompare('repas', 'fr') === 0 ? 'OK' : 'KO'),
);
console.log(
  'Phrase 2 : ' +
  (plumeMagique(phrase2).localeCompare('dejeuner', 'fr') === 0 ? 'OK' : 'KO'),
);
console.log(
  'Phrase 3 : ' +
  (plumeMagique(phrase3).localeCompare('diner', 'fr') === 0 ? 'OK' : 'KO'),
);

/*
  Gladius peut enfin reprendre ses travaux et vous en remercie. Il vous souhaite bonne chance,
  et vous indique le chemin le plus court pour atteindre Tolosa. Malheureusement vous allez devoir
  traverser les Plaines Sanglantes avant d'atteindre votre destination.
*/