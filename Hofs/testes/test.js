const getAllProductsFromStore = require('../exercicio1');
const getAllBluetoothDevices = require('../exercicio2');
const getMoreThan6GBGraphicsCard = require('../exercicio3');
const differenceBetweenMaxAndMinPrice = require('../exercicio4');
const verifyStore = require('../exercicio5');
const verifyId = require('../exercicio6');
const findColor = require('../exercicio7');
const averagePrice = require('../exercicio8');
const createStore = require('../exercicio9');

describe("Exercício 1 Função getAllProductsFromStore", () => {
  it("verifica se a função getAllProductsFromStore('Americanas') retorna array com os produtos da loja Americanas", () => {
    expect(getAllProductsFromStore("Americanas")).toEqual([
      'Mouse Jogo Notebook Pc Gamer',
      'Mouse Multilaser MO221',
      'Teclado Logitech K120, ABNT2',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Opto-Mecanico Redragon Infernal Dragon Viserion',
      'Teclado Mecanico T-Dagger Bermudo',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Gamer Trust GXT 835 Azor',
      'Headset Headband 3.5 mm Wired',
      'Headphone Microfone Gm-019',
      'Fone Ouvido Sem Fio Bluetooth Lc-840',
      'Headset M2 Cat 2021',
      'Placa De Video MSI GEFORCE RTX 3080 VENTUS 3X OC Edition',
      'Placa De Video ASUS RADEON RX 6700 XT DUAL OC Edition',
      'Placa De Video GIGABYTE GEFORCE RTX 2060 D6',
      'Placa De Video ASUS GEFORCE RTX 3080 ROG STRIX WHITE Edition OC',
      'Placa De Video AFOX RADEON R5 230',
      'Placa De Video ZOTAC GEFORCE GTX 1660 SUPER',
      'Placa De Video ASROCK RADEON RX 6700 XT CHALLENGER',
      'Placa De Video ASROCK RADEON RX 6800'
    ]);
  });
  it("verifica se a função getAllProductsFromStore('Kalunga') retorna um array com os produtos da loja Kalunga", () => {
    expect(getAllProductsFromStore("Kalunga")).toEqual([
      'Mouse Gamer Logitech G203 Rgb Lightsync',
      'Mouse Gamer Silencioso Ergonômico',
      'Mouse Logitech M170',
      'Mouse Gamer 3200dpi MO273-Multilaser',
      'Fone de Ouvido Gamer Headset Multilaser PH073',
      'Fone de Ouvido Headset Gamer Blaze TGT-BLA-01',
      'Fone Headset 5.0 Com Led Dobrável',
      'Fone De Ouvido Headset Surround Bass Bluetooth',
      'Headset M2 Cat 2021'
    ]);
  });
  it("verifica se a função getAllProductsFromStore('K011') retorna um objetos os itens que contenham o id informado", () => {
    expect(getAllProductsFromStore("K011")).toEqual([]);
  });
});

describe("Exercício 2 Função getAllBluetoothDevices", () => {
  it("verifica se a função getAllBluetoothDevices() retorna um array com o nome de todos os itens que contenham bluetoot", () => {
    expect(getAllBluetoothDevices()).toEqual([
      'Mouse Logitech M170',
      'Mouse Logitech Mx Master 3',
      'Mouse Jogo Notebook Pc Gamer',
      'Mouse Multilaser MO221',
      'Teclado Logitech K120, ABNT2',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Mecanico Gamer Redragon Daska, Rainbow',
      'Teclado Mecanico T-Dagger Bermudo',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Fone Ouvido Sem Fio Bluetooth Lc-840',
      'Fone Headset 5.0 Com Led Dobrável',
      'Fone De Ouvido Headset Surround Bass Bluetooth'
    ]);
  });
});

describe("Exercício 3 Função getMoreThan6GBGraphicsCard", () => {
  it("verifica se a função getMoreThan6GBGraphicsCard() retorna array com as placas de vídeo com mais de 6GB de memória", () => {
    expect(getMoreThan6GBGraphicsCard()).toEqual([
      'Placa De Video MSI GEFORCE RTX 3080 VENTUS 3X OC Edition',
      'Placa De Video ASUS RADEON RX 6700 XT DUAL OC Edition',
      'Placa De Video ASUS GEFORCE RTX 3080 ROG STRIX WHITE Edition OC',
      'Placa De Video ASROCK RADEON RX 6700 XT CHALLENGER',
      'Placa De Video ASROCK RADEON RX 6800'
    ]);
  });
});

describe("Exercício 4 Função differenceBetweenMaxAndMinPrice", () => {
  it("verifica se a função differenceBetweenMaxAndMinPrice(50) retorna um array com o nome de todos os itens que tenham o preço maior que o número informado", () => {
    expect(differenceBetweenMaxAndMinPrice(50)).toEqual([
      'Mouse Logitech M170',
      'Mouse Logitech Mx Master 3',
      'Headset Gamer Hyperx Cloud Stinger Core',
      'Headset Headband 3.5 mm Wired',
      'Placa De Video MSI GEFORCE RTX 3080 VENTUS 3X OC Edition',
      'Placa De Video ASUS RADEON RX 6700 XT DUAL OC Edition',
      'Placa De Video MANCER RADEON RX 560',
      'Placa De Video GIGABYTE GEFORCE RTX 2060 D6',
      'Placa De Video ASUS GEFORCE RTX 3080 ROG STRIX WHITE Edition OC',
      'Placa De Video ZOTAC GEFORCE GTX 1660 SUPER',
      'Placa De Video ASROCK RADEON RX 6700 XT CHALLENGER',
      'Placa De Video ASROCK RADEON RX 6800',
      'Placa De Video PNY GEFORCE GTX 970'
    ]);
  });
  it("verifica se a função differenceBetweenMaxAndMinPrice(100) retorna um array com o nome de todos os itens que tenham o preço maior que o número informado", () => {
    expect(differenceBetweenMaxAndMinPrice(100)).toEqual([
      'Headset Gamer Hyperx Cloud Stinger Core',
      'Placa De Video MSI GEFORCE RTX 3080 VENTUS 3X OC Edition',
      'Placa De Video ASUS RADEON RX 6700 XT DUAL OC Edition',
      'Placa De Video MANCER RADEON RX 560',
      'Placa De Video GIGABYTE GEFORCE RTX 2060 D6',
      'Placa De Video ASUS GEFORCE RTX 3080 ROG STRIX WHITE Edition OC',
      'Placa De Video ZOTAC GEFORCE GTX 1660 SUPER',
      'Placa De Video ASROCK RADEON RX 6700 XT CHALLENGER',
      'Placa De Video ASROCK RADEON RX 6800',
      'Placa De Video PNY GEFORCE GTX 970'
    ]);
  });
  it("verifica se a função differenceBetweenMaxAndMinPrice(300) retorna um array com o nome de todos os itens que tenham o preço maior que o número informado", () => {
    expect(differenceBetweenMaxAndMinPrice(300)).toEqual([ 'Placa De Video MSI GEFORCE RTX 3080 VENTUS 3X OC Edition' ]);
  });
  it("verifica se a função differenceBetweenMaxAndMinPrice(1000) retorna um array vazio", () => {
    expect(differenceBetweenMaxAndMinPrice(1000)).toEqual([]);
  });
});

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
      id: 'M004',
      name: 'Mouse Logitech M170',
      brand: 'Logitech',
      dpi: 1,
      color: [ 'black', 'white', 'red' ],
      bluetooth: true,
      buttons: 3,
      stores: [ 'Shopee', 'KaBuM!', 'Kalunga' ],
      prices: [ 10.1, 69.9, 69.9 ]
    });
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

describe("Exercício 8 Função averagePrice", () => {
  it("verifica se a função averagePrice('H010') retorna um objetos os itens que contenham o id informado", () => {
    expect(averagePrice("H010")).toEqual({ name: 'Headset M2 Cat 2021', averagePrice: 166.8 });
  });
  it("verifica se a função averagePrice('K007') retorna um objetos os itens que contenham o id informado", () => {
    expect(averagePrice("K007")).toEqual({ name: 'Teclado Mecanico T-Dagger Bermudo', averagePrice: 217.33 });
  });
  it("verifica se a função averagePrice('K011') retorna um objetos os itens que contenham o id informado", () => {
    expect(averagePrice("K011")).toBe("id não encontrado");
  });
});

const objTeste = {
  'KaBuM!': {
    mouses: [
      'Mouse Gamer Cobra Chroma M711 Rgb Redragon',
      'Mouse Gamer Logitech G203 Rgb Lightsync',
      'Mouse Gamer Silencioso Ergonômico',
      'Mouse Logitech M170',
      'Mouse Gamer 3200dpi MO273-Multilaser',
      'Mouse Logitech Mx Master 3'
    ],
    keyboards: [
      'Teclado Logitech K120, ABNT2',
      'Teclado Mecanico Pichau P531 RGB',
      'Teclado Mecanico Pichau P531 RGB',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Mecanico Gamer Redragon Daska, Rainbow',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Gamer Trust GXT 835 Azor',
      'Teclado Gamer Multilaser Multimidia USB PRETO/VERDE'
    ],
    headsets: [
      'Headset Gamer Hyperx Cloud Stinger Core',
      'Headset Gamer Scylla Redragon H901',
      'Fone de Ouvido Gamer Headset Multilaser PH073'
    ],
    graphicsCard: [
      'Placa De Video MSI GEFORCE RTX 3080 VENTUS 3X OC Edition',
      'Placa De Video MANCER RADEON RX 560',
      'Placa De Video ASUS GEFORCE RTX 3080 ROG STRIX WHITE Edition OC',
      'Placa De Video ASROCK RADEON RX 6800',
      'Placa De Video PNY GEFORCE GTX 970'
    ]
  },
  Terabyteshop: {
    mouses: [
      'Mouse Gamer Cobra Chroma M711 Rgb Redragon',
      'Mouse Gamer Logitech G203 Rgb Lightsync'
    ],
    keyboards: [],
    headsets: [
      'Headset Gamer Hyperx Cloud Stinger Core',
      'Headset Gamer Scylla Redragon H901',
      'Headset Headband 3.5 mm Wired'
    ],
    graphicsCard: []
  },
  Pichau: {
    mouses: [
      'Mouse Gamer Cobra Chroma M711 Rgb Redragon',
      'Mouse Logitech Mx Master 3'
    ],
    keyboards: [
      'Teclado Mecanico Pichau P531 RGB',
      'Teclado Mecanico Pichau P531 RGB',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Mecanico Gamer Redragon Daska, Rainbow',
      'Teclado Opto-Mecanico Redragon Infernal Dragon Viserion',
      'Teclado Mecanico T-Dagger Bermudo',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Gamer Trust GXT 835 Azor',
      'Teclado Gamer Multilaser Multimidia USB PRETO/VERDE'
    ],
    headsets: [
      'Headset Gamer Scylla Redragon H901',
      'Fone de Ouvido Headset Gamer Blaze TGT-BLA-01'
    ],
    graphicsCard: [
      'Placa De Video MSI GEFORCE RTX 3080 VENTUS 3X OC Edition',
      'Placa De Video ASUS RADEON RX 6700 XT DUAL OC Edition',
      'Placa De Video MANCER RADEON RX 560',
      'Placa De Video GIGABYTE GEFORCE RTX 2060 D6',
      'Placa De Video ASUS GEFORCE RTX 3080 ROG STRIX WHITE Edition OC',
      'Placa De Video AFOX RADEON R5 230',
      'Placa De Video ZOTAC GEFORCE GTX 1660 SUPER',
      'Placa De Video ASROCK RADEON RX 6700 XT CHALLENGER',
      'Placa De Video ASROCK RADEON RX 6800',
      'Placa De Video PNY GEFORCE GTX 970'
    ]
  },
  Kalunga: {
    mouses: [
      'Mouse Gamer Logitech G203 Rgb Lightsync',
      'Mouse Gamer Silencioso Ergonômico',
      'Mouse Logitech M170',
      'Mouse Gamer 3200dpi MO273-Multilaser'
    ],
    keyboards: [],
    headsets: [
      'Fone de Ouvido Gamer Headset Multilaser PH073',
      'Fone de Ouvido Headset Gamer Blaze TGT-BLA-01',
      'Fone Headset 5.0 Com Led Dobrável',
      'Fone De Ouvido Headset Surround Bass Bluetooth',
      'Headset M2 Cat 2021'
    ],
    graphicsCard: []
  },
  Shopee: {
    mouses: [ 'Mouse Gamer Silencioso Ergonômico', 'Mouse Logitech M170' ],
    keyboards: [],
    headsets: [],
    graphicsCard: []
  },
  'Loja Multilaser': {
    mouses: [ 'Mouse Gamer 3200dpi MO273-Multilaser' ],
    keyboards: [],
    headsets: [],
    graphicsCard: []
  },
  'Mercado Livre': {
    mouses: [ 'Mouse Gamer Rgb Gt-m3 Lehmox', 'Mouse Logitech Mx Master 3' ],
    keyboards: [],
    headsets: [
      'Headset Gamer Hyperx Cloud Stinger Core',
      'Fone de Ouvido Gamer Headset Multilaser PH073',
      'Headphone Microfone Gm-019',
      'Fone Ouvido Sem Fio Bluetooth Lc-840',
      'Fone Headset 5.0 Com Led Dobrável',
      'Fone De Ouvido Headset Surround Bass Bluetooth'
    ],
    graphicsCard: []
  },
  'Magazine Luiza': {
    mouses: [ 'Mouse Gamer Rgb Gt-m3 Lehmox', 'Mouse Gamer K-Mex' ],
    keyboards: [ 'Teclado Mecanico Gamer Redragon Daska, Rainbow' ],
    headsets: [
      'Fone de Ouvido Headset Gamer Blaze TGT-BLA-01',
      'Fone Ouvido Sem Fio Bluetooth Lc-840'
    ],
    graphicsCard: []
  },
  Submarino: {
    mouses: [
      'Mouse Gamer Rgb Gt-m3 Lehmox',
      'Mouse Gamer K-Mex',
      'Mouse Jogo Notebook Pc Gamer',
      'Mouse Multilaser MO221'
    ],
    keyboards: [
      'Teclado Logitech K120, ABNT2',
      'Teclado Mecanico Pichau P531 RGB',
      'Teclado Mecanico Pichau P531 RGB',
      'Teclado Opto-Mecanico Redragon Infernal Dragon Viserion',
      'Teclado Mecanico T-Dagger Bermudo',
      'Teclado Gamer Multilaser Multimidia USB PRETO/VERDE'
    ],
    headsets: [
      'Headphone Microfone Gm-019',
      'Fone Headset 5.0 Com Led Dobrável',
      'Fone De Ouvido Headset Surround Bass Bluetooth',
      'Headset M2 Cat 2021'
    ],
    graphicsCard: [
      'Placa De Video ASUS RADEON RX 6700 XT DUAL OC Edition',
      'Placa De Video MANCER RADEON RX 560',
      'Placa De Video GIGABYTE GEFORCE RTX 2060 D6',
      'Placa De Video AFOX RADEON R5 230',
      'Placa De Video ZOTAC GEFORCE GTX 1660 SUPER',
      'Placa De Video ASROCK RADEON RX 6700 XT CHALLENGER',
      'Placa De Video PNY GEFORCE GTX 970'
    ]
  },
  'Casas Bahia': {
    mouses: [ 'Mouse Gamer K-Mex' ],
    keyboards: [],
    headsets: [],
    graphicsCard: []
  },
  Americanas: {
    mouses: [ 'Mouse Jogo Notebook Pc Gamer', 'Mouse Multilaser MO221' ],
    keyboards: [
      'Teclado Logitech K120, ABNT2',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Opto-Mecanico Redragon Infernal Dragon Viserion',
      'Teclado Mecanico T-Dagger Bermudo',
      'Teclado Mecanico Gamer Corsair K60 PRO',
      'Teclado Gamer Trust GXT 835 Azor'
    ],
    headsets: [
      'Headset Headband 3.5 mm Wired',
      'Headphone Microfone Gm-019',
      'Fone Ouvido Sem Fio Bluetooth Lc-840',
      'Headset M2 Cat 2021'
    ],
    graphicsCard: [
      'Placa De Video MSI GEFORCE RTX 3080 VENTUS 3X OC Edition',
      'Placa De Video ASUS RADEON RX 6700 XT DUAL OC Edition',
      'Placa De Video GIGABYTE GEFORCE RTX 2060 D6',
      'Placa De Video ASUS GEFORCE RTX 3080 ROG STRIX WHITE Edition OC',
      'Placa De Video AFOX RADEON R5 230',
      'Placa De Video ZOTAC GEFORCE GTX 1660 SUPER',
      'Placa De Video ASROCK RADEON RX 6700 XT CHALLENGER',
      'Placa De Video ASROCK RADEON RX 6800'
    ]
  },
  Shoptime: {
    mouses: [ 'Mouse Jogo Notebook Pc Gamer', 'Mouse Multilaser MO221' ],
    keyboards: [],
    headsets: [],
    graphicsCard: []
  },
  AliExpress: {
    mouses: [],
    keyboards: [],
    headsets: [ 'Headset Headband 3.5 mm Wired' ],
    graphicsCard: []
  }
}

describe("Exercício 9 Função createStore", () => {
  it("verifica se a função createStore() retorna um objetos com o nome de todas as lojas e seus respectivos produtos, separados por tipo do produto contendo um array com o nome de cada produto", () => {
    expect(createStore()).toEqual(objTeste);
  });
  it("verifica se a função createStore('Terabyteshop') retorna a loja com todos os seus produtos", () => {
    expect(createStore("Terabyteshop")).toEqual({
      mouses: [
        'Mouse Gamer Cobra Chroma M711 Rgb Redragon',
        'Mouse Gamer Logitech G203 Rgb Lightsync'
      ],
      keyboards: [],
      headsets: [
        'Headset Gamer Hyperx Cloud Stinger Core',
        'Headset Gamer Scylla Redragon H901',
        'Headset Headband 3.5 mm Wired'
      ],
      graphicsCard: []
    });
  });
  it("verifica se a função createStore('Terabyteshop', 'headsets') retorna um array com o nome de todos os produtos que a loja contem", () => {
    expect(createStore("Terabyteshop", "headsets")).toEqual([
      'Headset Gamer Hyperx Cloud Stinger Core',
      'Headset Gamer Scylla Redragon H901',
      'Headset Headband 3.5 mm Wired'
    ]
    );
  });
  it("verifica se a função createStore('xabloja', 'headsets') com uma loja que não existe retorna o array inteiro", () => {
    expect(createStore("xabloja", "headsets")).toEqual(objTeste);
  });
  it("verifica se a função createStore('Terabyteshop', 'xaproduto') com o produto inexistente retorna todos os itens da loja", () => {
    expect(createStore("Terabyteshop", "xaproduto")).toEqual({
      mouses: [
        'Mouse Gamer Cobra Chroma M711 Rgb Redragon',
        'Mouse Gamer Logitech G203 Rgb Lightsync'
      ],
      keyboards: [],
      headsets: [
        'Headset Gamer Hyperx Cloud Stinger Core',
        'Headset Gamer Scylla Redragon H901',
        'Headset Headband 3.5 mm Wired'
      ],
      graphicsCard: []
    });
  });
});
