Number.prototype.entre = function (inicio, fim) { // A função entre foi criada pra ser chamada diretamente no if
  return this >= inicio && this <= fim  // aki ele dis se "isto" estivar entre o inicio e o fim então ele trara 
}


// se der if direto ele tratara a outra resposta
// se usar o else ele desvalida a outra resposta e então tras a dele e então fecha as possibilidades
// o else if ele desvalida a outra resposta e então utiliza esta porem ele não fecha as possibilidades
const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) { 
    console.log('Quadro de honra')
  } else if(nota.entre(7, 8.99)){ 
    console.log('Aprovado')
  } else if(nota.entre(4, 6.99)){
    console.log('Recuperação')
  } else if(nota.entre(4, 6.99)){
    console.log('Reprovado')
  } else {
    console.log('Nota invalida')
  }

  console.log('fim')
  console.log('-----')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

// O primeiro sempre sera o primeiro e o else sozinho sempre sera o ultimo