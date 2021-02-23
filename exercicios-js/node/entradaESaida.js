// Aki ele vai pegar o parametro que for passado quando chamar esse arquivo se for -a ele trara true e se for qualquer outro trara falso
const anonimo = process.argv.indexOf('-a') !== -1 //Argv = Seria o ponto de entrada
// console.log(anonimo)

if(anonimo) {
  process.stdout.write('Fala Anônimo!\n') //Stdout = Saida padrão
  process.exit() // Mata a aplicação
} else {
  process.stdout.write('Informe o seu nome: ') // write = Escreva
  process.stdin.on('data', data => { // stdin = Entrada padrão com o on('data')
    const nome = data.toString().replace('\n', '') // aki ele vai salvar o que foi passado no teclado do usuario e depois com o (replace) vai retirar a proxima linha 

    process.stdout.write(`Fala ${nome}!!\n`)
    process.exit()
  }) 
}