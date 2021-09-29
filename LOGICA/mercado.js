const mercado = {
  frutas: [
    {
      id: 1001,
      nome: "Maracujá",
      valorNutritivo: ["C"],
      predominante: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "DEZ"],
      preco: 3.40,
    },
    {
      id: 1002,
      nome: "Manga",
      valorNutritivo: ["A", "C", "B"],
      predominante: ["JAN", "FEV", "MAR", "OUT", "NOV", "DEZ"],
      preco: 2.30,
    },
    {
      id: 1003,
      nome: "Laranja",
      valorNutritivo: ["A", "C", "B"],
      predominante: ["MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV"],
      preco: 2.30,
    },
    {
      id: 1004,
      nome: "Banana",
      valorNutritivo: ["A", "B1", "B2"],
      predominante: ["JAN", "FEV", "MAR", "SET", "OUT", "NOV", "DEZ"],
      preco: 2.30,
    },
    {
      id: 1006,
      nome: "Mamão",
      valorNutritivo: ["A", "C"],
      predominante: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "SET", "OUT", "NOV", "DEZ"],
      preco: 1.94,
    },
    {
      id: 1007,
      nome: "Maçã",
      valorNutritivo: ["C"],
      predominante: ["FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET"],
      preco: 4.16,
    },
    {
      id: 1008,
      nome: "Limão",
      valorNutritivo: ["C"],
      predominante: ["JAN", "AGO", "SET", "OUT", "NOV", "DEZ"],
      preco: 2.50,
    },
  ],
  descontoSemana: {
    seg: [1001, 1003, 1007],
    ter: [1002, 1004, 1008],
    qua: [1001, 1003, 1005],
    qui: [1002, 1004, 1006],
    sex: [1003, 1005, 1007],
    sab: [1004, 1006, 1008],
    dom: [1001, 1005, 1007],
  }
}

module.exports = mercado;
