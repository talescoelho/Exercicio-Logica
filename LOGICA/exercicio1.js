const mercado = require("./mercado");

// escreva a função nomeFrutas retornar um array com o nome de todas as frutas da constante mercado;
function nomeFrutas() {
  const arr = [];

  for (let i = 0; i < mercado.frutas.length; i += 1) {
    arr.push(mercado.frutas[i].nome);
  }
  return arr;
}

console.log(nomeFrutas());

module.exports = nomeFrutas;
