console.log(module.exports === this) // this e uma forma de exportar no node
console.log(module.exports === exports) // exports tambem exporta as informações

// Formas de exportar
this.a = 1
exports.b = 1
module.exports.c = 1

exports = null 
console.log(module.exports)