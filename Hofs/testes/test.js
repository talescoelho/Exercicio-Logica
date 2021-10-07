const verifyStore = require('../exercicio5');
const verifyId = require('../exercicio6');
const findColor = require('../exercicio7');

describe("Exercício 5 Função verifyStore", () => {
  it("verifica se a função verifyStore('KaBuM!', 'keyboards') retorna um array com o nome de todos os teclados da Kabum!", () => {
    expect(verifyStore("KaBuM!", "keyboards")).toEqual([
      'Teclado Logitech K120, ABNT2',
      'Teclado Mecanico Pichau P531 RGB',
      'Teclado Mecanico Pichau P531 RGB',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Mecanico Gamer Redragon Daska, Rainbow',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Gamer Trust GXT 835 Azor',
      'Teclado Gamer Multilaser Multimidia USB PRETO/VERDE'
    ]);
  });
  it("verifica se a função verifyStore('Terabyteshop', 'mouses') retorna um array com o nome de todos os mouses da Terabyteshop", () => {
    expect(verifyStore("Terabyteshop", "mouses")).toEqual([
      'Mouse Gamer Cobra Chroma M711 Rgb Redragon',
      'Mouse Gamer Logitech G203 Rgb Lightsync'
    ]);
  });
  it("verifica se a função verifyStore('Americanas', 'headsets') retorna um array com o nome de todos os headsets da Americanas", () => {
    expect(verifyStore("Americanas", "headsets")).toEqual([
      'Headset Headband 3.5 mm Wired',
      'Headphone Microfone Gm-019',
      'Fone Ouvido Sem Fio Bluetooth Lc-840',
      'Headset M2 Cat 2021'
    ]);
  });
  it("verifica se a função verifyStore('Mercado Livre', 'graphicsCard') retorna um array com o nome de todos os graphicsCard da Mercado Livre", () => {
    expect(verifyStore("Mercado Livre", "graphicsCard")).toEqual([]);
  });
});

describe("Exercício 6 Função verifyId", () => {
  it("verifica se a função verifyId('K009') retorna um objeto com os dados do produto", () => {
    expect(verifyId("K009")).toEqual({
      id: 'K009',
      name: 'Teclado Gamer Trust GXT 835 Azor',
      brand: 'Trust',
      color: [ 'black' ],
      bluetooth: false,
      stores: [ 'KaBuM!', 'Americanas', 'Pichau' ],
      prices: [ 149.9, 160.66, 180.99 ]
    });
  });
  it("verifica se a função verifyId('M004') retorna um objeto com os dados do produto", () => {
    expect(verifyId("M004")).toEqual({
      id: "M004",
      name: "Mouse Logitech M170",
      brand: "Logitech",
      dpi: 1.000,
      color: ["black", "white", "red"],
      bluetooth: true,
      buttons: 3,
      stores: ["Shopee", "Kabum!", "Kalunga"],
      prices: [10.10, 69.90, 69.90],
    },);
  });
});

describe("Exercício 7 Função findColor", () => {
  it("verifica se a função findColor('blue', 'mouses') retorna um array de objetos os itens que contenham a cor 'blue' do array de mouses", () => {
    expect(findColor("blue", "mouses")).toEqual([
      { name: 'Mouse Gamer K-Mex', lowerstPrice: 17.14 },
      { name: 'Mouse Jogo Notebook Pc Gamer', lowerstPrice: 39.99 },
      { name: 'Mouse Multilaser MO221', lowerstPrice: 34.96 }
    ]);
  });
  it("verifica se a função findColor('black', 'keyboards') retorna um array de objetos os itens que contenham a cor 'black' do array de keyboards", () => {
    expect(findColor("black", "keyboards")).toEqual([
      { name: 'Teclado Logitech K120, ABNT2', lowerstPrice: 59.9 },
      { name: 'Teclado Mecanico Pichau P531 RGB', lowerstPrice: 229.9 },
      { name: 'Teclado Mecanico Pichau P531 RGB', lowerstPrice: 229.9 },
      {
        name: 'Teclado Mecanico Gamer Corsair K60 PRO',
        lowerstPrice: 289.9
      },
      {
        name: 'Teclado Mecanico Gamer Redragon Daska, Rainbow',
        lowerstPrice: 219
      },
      {
        name: 'Teclado Opto-Mecanico Redragon Infernal Dragon Viserion',
        lowerstPrice: 419.9
      },
      { name: 'Teclado Mecanico T-Dagger Bermudo', lowerstPrice: 205 },
      {
        name: 'Teclado Mecanico Gamer Corsair K60 PRO',
        lowerstPrice: 289.9
      },
      { name: 'Teclado Gamer Trust GXT 835 Azor', lowerstPrice: 149.9 },
      {
        name: 'Teclado Gamer Multilaser Multimidia USB PRETO/VERDE',
        lowerstPrice: 34.9
      }
    ]);
  });
  it("verifica se a função findColor('pink', 'headsets') retorna um array de objetos os itens que contenham a cor 'pink' do array de headsets", () => {
    expect(findColor("pink", "headsets")).toEqual([
      {
        name: 'Fone De Ouvido Headset Surround Bass Bluetooth',
        lowerstPrice: 59.99
      },
      { name: 'Headset M2 Cat 2021', lowerstPrice: 150.45 }
    ]);
  });
});
