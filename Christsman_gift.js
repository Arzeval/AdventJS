function wrapping(gifts) {
  const tabla = []
  for (let i = 0; i < gifts.length; i++) { 
    let estrellas = '*'.repeat(gifts[i].length)
  tabla.push("**"+estrellas+"\n*"+gifts[i]+"*\n"+estrellas+"**")
  }
    return tabla
}
