function tratarErroELancar(erro) {
  throw new Error('Deu erro jovem')
}

function imprimirNomeGritado(obj) { // E passado um parametro objeto e dentro de objeto tem o nome
  try {// try serve quando vai fazer um codigo que tem alta chance de trazer um erro
    console.log(obj.name.toUpperCase() + "!!!"); //Função que transforma todas as letras em maiusculas
  } catch (e) { // O catch serve para passar o tratamento do erro
    tratarErroELancar(e)
  } finally { // Que mesmo que de problema ele fara um ato
    console.log('final')
  }
}

const obj = { name: "breno" };
imprimirNomeGritado(obj);
