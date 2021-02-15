// E necessario pra função passar um retorno apenas quando existe a necessidade 
//de ela aparecer na tela para o usuario se e algo mais interno não e necessario
function area(largura, altura) {
  const area = largura * altura
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area} m2`)
  } else {
    return area
  }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))