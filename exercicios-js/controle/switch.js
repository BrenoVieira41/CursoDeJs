// O switch e feito para multiplas seleções 
// no switch ele passa um valor e não 
const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) { // floor = arredondamento pra baixo || ceil = arredondamento para baixo
    case 10: // se não passar nenhuma informação ele vai passar e utilizar a proxima da lista de cima para baixo
    case 9:
      console.log('Quadro de Honra') 
      break // ele so vai sair do case quando der o break pois ele aceita mais de um codigo
      case 8: case 7: // Tambem e aceito na mesma linha
      console.log('Aprovado')
      break
      case 6: case 5: case 4:
        console.log('Recuperação')
      break
      case 3: case 2: case 1:
        console.log('Reprovado')
      break
      default: //tras se não entrar em nenhum outro
      console.log('Nota inválida')
  }
}

// Se não tiver o break ele saira usando todos apartir do que ele iniciara de cima pra baixo 

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)