const mercado = require("./mercado");

// escreva a função maisCara retornar os dados da fruta mais cara;
function maisCara() {
  let f = mercado.frutas[0];
  for (let i = 0; i < mercado.frutas.length; i += 1) {
    if (mercado.frutas[i].preco > f.preco) f = mercado.frutas[i];
  }
  return f;
}

console.log(maisCara());

module.exports = maisCara;
