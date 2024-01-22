'use strict'

let recipeMap = new Map([['pepino', 500], ['tomates', 350], ['cebollas', 50]]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // pepino, tomates, cebollas
}
