const mercado = require("./mercado");

// escreva a função diaDesconto recebe o dia da semana e retorna uma lista com o nome das frutas que estão com desconto neste dia;
function diaDesconto(dia) {
  const arr = [];
  const ids = mercado.descontoSemana[dia];

  for (let i = 0; i < mercado.frutas.length; i += 1) {
    if (ids.includes(mercado.frutas[i].id)) {
      arr.push(mercado.frutas[i].nome);
    }
  }
  return arr;
}

console.log(diaDesconto("seg"));

module.exports = diaDesconto;
