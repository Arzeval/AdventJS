function getGiftsToRefill(a1, a2, a3) {
 const resultado = []
for (let i = 0; i < a2.length; i++) {
    if (!a1.includes(a2[i]) && !a3.includes(a2[i]) && !resultado.includes(a2[i])) {
      resultado.push(a2[i]);
    }
  }

  for (let j = 0; j < a3.length; j++) {
    if (!a1.includes(a3[j]) && !a2.includes(a3[j]) && !resultado.includes(a3[j])) {
      resultado.push(a3[j]);
    }
  }
 return resultado 
}
