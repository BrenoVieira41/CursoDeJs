/** A String pode ser passada de treis Formas
 *  Aspas duplas ""
 * Aspas Simples ''
 * Crases ``
 */

 const escola = "Cod3r"
  //Pesquisas
 console.log(escola.charAt(4)) //Trara a 4 letra do codigo Lembre-se ele começa pelo zero
 console.log(escola.charAt(5)) //Como não existe nesse codigo ele trara string vazia
 console.log(escola.charCodeAt(3)) //Trara o codigo unicode do numero (3)
 console.log(escola.indexOf('3')) //Faz uma procura dentro da constante

//Chamadas 
 console.log(escola.substring(1)) // Trata todos apartir do indice 1 no caso do (o) pra frente
 console.log(escola.substring(0, 3)) // Ele trara do 0 até o numero tem sem incluir o terceiro

 //Alterações
 console.log('Escola '.concat(escola).concat("!")) // Ele vai juntar (concatenar) as duas informações 
 console.log('Escola ' + escola + "!") // Forma mais simples de utilizar o codigo a cima 
 console.log(escola.replace(3, 'e')) //Ele vai pegar o "algo" do codigo e trazer de uma nova forma
 console.log(escola.replace(/\d/, 'e')) //Vai substituir todos os numeros do textos por uma nova forma
 console.log(escola.replace(/\w/g, 'e')) //Vai substituir todos os letras do textos por uma nova forma

 //Para Array
 console.log('Luiz,Paulo,Philias'.split(',')) //Ele passa o pedido que a cada virgula ele separa e transforma o contexto em uma array
