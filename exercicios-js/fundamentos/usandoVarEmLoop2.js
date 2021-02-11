const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function() {  //e posto uma função aki dentro
    console.log(i)
  })
}

funcs[2] ()
funcs[8] ()
