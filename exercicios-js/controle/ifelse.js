const imprimirResultado = function(nota) {
  if(nota >= 7 ) {
    console.log('Aprovado!')
  } else { // else siguinifica si não então si não tiver ele executara o else
    console.log('Reprovado!')
  }
}

imprimirResultado(10) //Aprovado
imprimirResultado(4) //Reprovado