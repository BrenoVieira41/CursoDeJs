function soBoaNoticia(nota) { //if traduzindo pra portugûes seria o si 
  if (nota >= 7) { // Então se a nota for maior que 7 ou igual a 7 ele executara oque tem dentro do if
    console.log('Aprovado com ' + nota)
  }
}

soBoaNoticia(8.1) //Trara
soBoaNoticia(7.1) //Trara
soBoaNoticia(6.1) //Não Trara

function seForVerdadeEuFalo(valor) {
  if(valor) { // como não foi passado nada ele pede apenas que esse algo seja true
    console.log('E verdade... ' + valor)
  }
}

seForVerdadeEuFalo() //Sera falso então não trara nada
seForVerdadeEuFalo(null) //Sera falso então não trara nada
seForVerdadeEuFalo(undefined) //Sera falso então não trara nada
seForVerdadeEuFalo('') //Sera falso então não trara nada
seForVerdadeEuFalo(0) //Sera falso Porem e o unico numero que sera falso
seForVerdadeEuFalo(-1) //Trara
seForVerdadeEuFalo(' ') //Trara
seForVerdadeEuFalo('?') //Trara
seForVerdadeEuFalo([]) //Trara
seForVerdadeEuFalo([1, 2]) //Trara
seForVerdadeEuFalo({}) //Trara