const mercado = require('./mercado');

// complete a função maisCara para retornar os dados da fruta com o maior preço;
function maisCara() {
    const market = mercado.frutas;
    let counter = 0;
    let frutaCara;
    for (let index = 0; index < market.length; index += 1) {
    if (counter < market[index].preco) {
    counter = market[index].preco;
    frutaCara = market[index];
    }
    }
    return frutaCara;
    }
    console.log(maisCara())

module.exports = maisCara;
