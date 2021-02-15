// Função em JS é First-Class Object (Citizens)

// criar de forma literal
function fun1() {}

// Armazenar em uma variavel
const fun2 = function () {} // se chamar o nome da função passando os parenteses () ela sera invocada

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2] // ela pode ser chamada de todas as formas dentro de um array
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como param
function run(fun) {
  fun()
}

run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  }
}

soma(2, 3)(4) // forma de chamar a função dentro de outra função diretamente
const cincoMais = soma(2, 3) //forma em processos de chamar a função
cincoMais(4)