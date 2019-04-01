"use strict";

let filtre = monstre => monstre[0]>0;

function monstresToujoursEnVie(groupeMonstres) {
    return groupeMonstres.filter(filtre);
}

let monstres1 = [10, 2];
let monstres2 = [[10, 2],[15, 3],[0, 4]];

console.log("1: "+monstresToujoursEnVie(monstres1));
console.log("2: "+monstresToujoursEnVie(monstres2));