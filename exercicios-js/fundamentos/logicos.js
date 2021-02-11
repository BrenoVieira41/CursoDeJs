//      E
// true && false = true
// true && false = false
// false && ? = false
//
//      Ou
// true || ? = true
// false || true = true
// false || false = false
// 
//      ou exclusivo
//  true ^ true = false
//  true ^ false = true
//  false ^ true = true
//  false ^ false = false

// Negração logica 
// !true = false
// !false = true

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2 // fara se algum dos dois acontecer
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // fara se algum dos dois acontecer 
  const comprarTv32 = trabalho1 !=  trabalho2 // fara um se ele for diferente do outro
  const comprarTv50 = trabalho1 && trabalho2 // fara se os dois acontecer
  const manterSaudavel = !comprarSorvete

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))