const produtos = {
  mouses: [
    {
      id: "M001",
      name: "Mouse Gamer Cobra Chroma M711 Rgb Redragon",
      brand: "Redragon",
      dpi: 10.000,
      color: ["black", "white"],
      bluetooth: false,
      buttons: 8,
      stores: ["KaBuM!", "Terabyteshop", "Pichau"],
      prices: [114.90, 116.90, 129.90],
    },
    {
      id: "M002",
      name: "Mouse Gamer Logitech G203 Rgb Lightsync",
      brand: "Logitech",
      dpi: 8.000,
      color: ["black", "white"],
      bluetooth: false,
      buttons: 6,
      stores: ["KaBuM!", "Terabyteshop", "Kalunga"],
      prices: [119.90, 129.90, 161.90],
    },
    {
      id: "M003",
      name: "Mouse Gamer Silencioso Ergonômico",
      brand: "Logitech",
      dpi: 1.000,
      color: ["black", "white"],
      bluetooth: false,
      buttons: 6,
      stores: ["Shopee", "KaBuM!", "Kalunga"],
      prices: [119.00, 124.90, 129.90],
    },
    {
      id: "M004",
      name: "Mouse Logitech M170",
      brand: "Logitech",
      dpi: 1.000,
      color: ["black", "white", "red"],
      bluetooth: true,
      buttons: 3,
      stores: ["Shopee", "KaBuM!", "Kalunga"],
      prices: [10.10, 69.90, 69.90],
    },
    {
      id: "M005",
      name: "Mouse Gamer 3200dpi MO273-Multilaser",
      brand: "Multilaser",
      dpi: 3.200,
      color: ["green", "orange"],
      bluetooth: false,
      buttons: 6,
      stores: ["Loja Multilaser", "KaBuM!", "Kalunga"],
      prices: [59.90, 52.90, 69.80],
    },
    {
      id: "M006",
      name: "Mouse Gamer Rgb Gt-m3 Lehmox",
      brand: "Lehmox",
      dpi: 1.200,
      color: ["black", "red"],
      bluetooth: false,
      buttons: 4,
      stores: ["Mercado Livre", "Magazine Luiza", "Submarino"],
      prices: [17.90, 44.91, 45.78],
    },
    {
      id: "M007",
      name: "Mouse Gamer K-Mex",
      brand: "K-Mex",
      dpi: 1.600,
      color: ["black", "blue"],
      bluetooth: false,
      buttons: 3,
      stores: ["Submarino", "Magazine Luiza", "Casas Bahia"],
      prices: [17.14, 26.95, 27.43],
    },
    {
      id: "M008",
      name: "Mouse Logitech Mx Master 3",
      brand: "Logitech",
      dpi: 4.000,
      color: ["white"],
      bluetooth: true,
      buttons: 7,
      stores: ["Mercado Livre", "KaBuM!", "Pichau"],
      prices: [570.63, 599.90, 499.90],
    },
    {
      id: "M009",
      name: "Mouse Jogo Notebook Pc Gamer",
      brand: "Dpx",
      dpi: 2.400,
      color: ["black", "white", "blue"],
      bluetooth: true,
      buttons: 3,
      stores: ["Americanas", "Shoptime", "Submarino"],
      prices: [39.99, 39.99, 39.99],
    },
    {
      id: "M010",
      name: "Mouse Multilaser MO221",
      brand: "Multilaser",
      dpi: 1.600,
      color: ["white", "blue"],
      bluetooth: true,
      buttons: 3,
      stores: ["Submarino", "Shoptime", "Americanas"],
      prices: [35.34, 34.96, 38.64],
    },
  ],
  keyboards: [
    {
      id: "K001",
      name: "Teclado Logitech K120, ABNT2",
      brand: "Logitech",
      color: ["black"],
      bluetooth: true,
      stores: ["KaBuM!", "Submarino", "Americanas"],
      prices: [59.90, 63.49, 78.00],
    },
    {
      id: "K002",
      name: "Teclado Mecanico Pichau P531 RGB",
      brand: "Pichau Gaming",
      color: ["black"],
      bluetooth: false,
      stores: ["KaBuM!", "Submarino", "Pichau"],
      prices: [229.90, 245.60, 259.99],
    },
    {
      id: "K003",
      name: "Teclado Mecanico Pichau P531 RGB",
      brand: "Pichau Gaming",
      color: ["black"],
      bluetooth: false,
      stores: ["KaBuM!", "Submarino", "Pichau"],
      prices: [229.90, 245.60, 259.99],
    },
    {
      id: "K004",
      name: "Teclado Mecanico Gamer Corsair K60 PRO",
      brand: "Corsair",
      color: ["black", "red"],
      bluetooth: true,
      stores: ["KaBuM!", "Americanas", "Pichau"],
      prices: [289.90, 325.00, 310.99],
    },
    {
      id: "K005",
      name: "Teclado Mecanico Gamer Redragon Daska, Rainbow",
      brand: "Redragon",
      color: ["black", "white"],
      bluetooth: true,
      stores: ["KaBuM!", "Magazine Luiza", "Pichau"],
      prices: [219.00, 230.60, 250.99],
    },
    {
      id: "K006",
      name: "Teclado Opto-Mecanico Redragon Infernal Dragon Viserion",
      brand: "Redragon",
      color: ["black", "red"],
      bluetooth: false,
      stores: ["Submarino", "Americanas", "Pichau"],
      prices: [419.90, 425.59, 440.00],
    },
    {
      id: "K007",
      name: "Teclado Mecanico T-Dagger Bermudo",
      brand: "T-Dagger",
      color: ["black", "grey"],
      bluetooth: true,
      stores: ["Submarino", "Americanas", "Pichau"],
      prices: [205.00, 220.99, 225.99],
    },
    {
      id: "K008",
      name: "Teclado Mecanico Gamer Corsair K60 PRO",
      brand: "Corsair",
      color: ["black", "red"],
      bluetooth: true,
      stores: ["KaBuM!", "Americanas", "Pichau"],
      prices: [289.90, 325.00, 310.99],
    },
    {
      id: "K009",
      name: "Teclado Gamer Trust GXT 835 Azor",
      brand: "Trust",
      color: ["black"],
      bluetooth: false,
      stores: ["KaBuM!", "Americanas", "Pichau"],
      prices: [149.90, 160.66, 180.99],
    },
    {
      id: "K010",
      name: "Teclado Gamer Multilaser Multimidia USB PRETO/VERDE",
      brand: "Multilaser",
      color: ["black", "green"],
      bluetooth: false,
      stores: ["KaBuM!", "Submarino", "Pichau"],
      prices: [34.90, 40.00, 43.99],
    },
  ],
  headsets: [
    {
      id: "H001",
      name: "Headset Gamer Hyperx Cloud Stinger Core",
      brand: "Hyperx",
      color: ["black"],
      bluetooth: false,
      stores: ["Mercado Livre", "KaBuM!", "Terabyteshop"],
      prices: [119.00, 309.90, 199.99],
    },
    {
      id: "H002",
      name: "Headset Gamer Scylla Redragon H901",
      brand: "Redragon",
      color: ["black"],
      bluetooth: false,
      stores: ["KaBuM!", "Terabyteshop", "Pichau"],
      prices: [114.90, 119.90, 125.42],
    },
    {
      id: "H003",
      name: "Headset Headband 3.5 mm Wired",
      brand: null,
      color: ["black"],
      bluetooth: false,
      stores: ["AliExpress", "Americanas", "Terabyteshop"],
      prices: [17.30, 103.46, 80.68],
    },
    {
      id: "H004",
      name: "Fone de Ouvido Gamer Headset Multilaser PH073",
      brand: "Multilaser",
      color: ["black"],
      bluetooth: false,
      stores: ["Mercado Livre", "KaBuM!", "Kalunga"],
      prices: [44.99, 53.90, 73.80],
    },
    {
      id: "H005",
      name: "Fone de Ouvido Headset Gamer Blaze TGT-BLA-01",
      brand: "TGT",
      color: ["red"],
      bluetooth: false,
      stores: ["Pichau", "Magazine Luiza", "Kalunga"],
      prices: [49.90, 58.90, 59.90],
    },
    {
      id: "H006",
      name: "Headphone Microfone Gm-019",
      brand: null,
      color: ["black"],
      bluetooth: false,
      stores: ["Mercado Livre", "Submarino", "Americanas"],
      prices: [59.90, 64.07, 68.90],
    },
    {
      id: "H007",
      name: "Fone Ouvido Sem Fio Bluetooth Lc-840",
      brand: "Xtrad",
      color: ["black", "white"],
      bluetooth: true,
      stores: ["Mercado Livre", "Magazine Luiza", "Americanas"],
      prices: [39.95, 63.00, 55.00],
    },
    {
      id: "H008",
      name: "Fone Headset 5.0 Com Led Dobrável",
      brand: null,
      color: ["white"],
      bluetooth: true,
      stores: ["Mercado Livre", "Submarino", "Kalunga"],
      prices: [109.90, 99.99, 108.40],
    },
    {
      id: "H009",
      name: "Fone De Ouvido Headset Surround Bass Bluetooth",
      brand: null,
      color: ["pink"],
      bluetooth: true,
      stores: ["Mercado Livre", "Submarino", "Kalunga"],
      prices: [69.07, 80.45, 59.99],
    },
    {
      id: "H010",
      name: "Headset M2 Cat 2021",
      brand: null,
      color: ["black", "white", "pink"],
      bluetooth: false,
      stores: ["Americanas", "Kalunga", "Submarino"],
      prices: [168.99, 150.45, 180.95],
    },
  ],
  graphicsCard: [
    {
      id: "G001",
      name: "Placa De Video MSI GEFORCE RTX 3080 VENTUS 3X OC Edition",
      brand: "MSI",
      gpu: "NVIDIA® GeForce RTX™ 3080",
      memory: "10GB",
      stores: ["KaBuM!", "Americanas", "Pichau"],
      prices: [9299.88, 9469.00, 9600.99],
    },
    {
      id: "G002",
      name: "Placa De Video ASUS RADEON RX 6700 XT DUAL OC Edition",
      brand: "Asus",
      gpu: "AMD Radeon RX 6700 XT",
      memory: "12GB",
      stores: ["Submarino", "Americanas", "Pichau"],
      prices: [6999.91, 7103.00, 7245.99],
    },
    {
      id: "G003",
      name: "Placa De Video MANCER RADEON RX 560",
      brand: "Mancer",
      gpu: "AMD Radeon®️ RX560",
      memory: "4GB",
      stores: ["KaBuM!", "Submarino", "Pichau"],
      prices: [1179.91, 1200.00, 1350.88],
    },
    {
      id: "G004",
      name: "Placa De Video GIGABYTE GEFORCE RTX 2060 D6",
      brand: "Gigabyte",
      gpu: "GeForce RTX™ 2060",
      memory: "6GB",
      stores: ["Americanas", "Submarino", "Pichau"],
      prices: [3399.91, 3420.00, 3560.97],
    },
    {
      id: "G005",
      name: "Placa De Video ASUS GEFORCE RTX 3080 ROG STRIX WHITE Edition OC",
      brand: "Asus",
      gpu: "NVIDIA® GeForce RTX™ 3080",
      memory: "10GB",
      stores: ["KaBuM!", "Americanas", "Pichau"],
      prices: [12999.91, 13120.56, 13050.43],
    },
    {
      id: "G006",
      name: "Placa De Video AFOX RADEON R5 230",
      brand: "Afox",
      gpu: "R5 230",
      memory: "2GB",
      stores: ["Submarino", "Americanas", "Pichau"],
      prices: [299.91, 287.56, 320.99],
    },
    {
      id: "G007",
      name: "Placa De Video ZOTAC GEFORCE GTX 1660 SUPER",
      brand: "Zotac",
      gpu: "GeForce® GTX 1660 SUPER",
      memory: "6GB",
      stores: ["Submarino", "Americanas", "Pichau"],
      prices: [3399.91, 3420.56, 3560.99],
    },
    {
      id: "G008",
      name: "Placa De Video ASROCK RADEON RX 6700 XT CHALLENGER",
      brand: "ASRock",
      gpu: "AMD Radeon™ RX 6700 XT",
      memory: "12GB",
      stores: ["Submarino", "Americanas", "Pichau"],
      prices: [12999.91, 13120.56, 13050.43],
    },
    {
      id: "G009",
      name: "Placa De Video ASROCK RADEON RX 6800",
      brand: "ASRock",
      gpu: "AMD Radeon ™ RX 6800",
      memory: "16GB",
      stores: ["KaBuM!", "Americanas", "Pichau"],
      prices: [6740.92, 6800.39, 6954.43],
    },
    {
      id: "G010",
      name: "Placa De Video PNY GEFORCE GTX 970",
      brand: "PNY",
      gpu: "GeForce GTX 970",
      memory: "4GB",
      stores: ["KaBuM!", "Submarino", "Pichau"],
      prices: [1549.05, 1560.78, 1760.43],
    },
  ]
};

module.exports = produtos;
