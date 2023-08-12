function distributeGifts(packOfGifts, reindeers) {
  let renos = 0;
  let regalos = 0;
  for (let i = 0; i < reindeers.length; i++) { 
    renos = renos + 2 * reindeers[i].length;

}
  for (let j = 0; j < packOfGifts.length; j++) {
    regalos = regalos + packOfGifts[j].length;

}
  let resultado = renos/regalos
  return Math.trunc(resultado) 

}
