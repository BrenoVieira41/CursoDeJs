const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/6 * 22* * 4', function () { //De 5 em 5 minutos as 12 horas e que dia da semana ele vai fazer
  console.log('Executando Tarefa 1!', new Date().getSeconds())
}) 