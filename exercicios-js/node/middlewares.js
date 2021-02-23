//Padrões middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => { // O primeiro parametro e um objeto, o segundo e oque vai chamar a proxima função da cadeia
  ctx.valor1 = 'mid1'
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2'
  next()
}

const passo3 = ctx => ctx.valor = 'mid3'

const exec = (ctx, ...middlewares) => {
  const execPasso = indice => {
    
  }
}