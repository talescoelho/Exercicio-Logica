const mercado = require("./mercado");

// escreva a função frutaPredominante para retornar um objeto com o nome da fruta;
function frutaPredominante() {
  let f = mercado.frutas[0];
  for (let i = 0; i < mercado.frutas.length; i += 1) {
    if (mercado.frutas[i].predominante.length > f.predominante.length) {
      f = mercado.frutas[i];
    }
  }
  return f.nome;
}

console.log(frutaPredominante());

module.exports = frutaPredominante;
