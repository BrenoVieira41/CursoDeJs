// factory simples

function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  };
}
console.log(criarProduto("banana", 2.99));
console.log(criarProduto("maca", 5.00));
