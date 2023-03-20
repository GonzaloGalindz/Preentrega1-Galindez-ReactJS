const clothing = [
  {
    id: "1",
    name: "CHOMBA ARGENTINA",
    price: 18999,
    category: "remeras",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/debfac0812e045a08d9caeb500d789bf_9366/Chomba_Argentina_Tiro_23_Azul_HF3920_21_model.jpg",
    stock: 25,
    description: "Chomba de la Selección Argentina",
  },
  {
    id: "2",
    name: "REMERA DE ENTRENAMIENTO TRAIN ESSENTIALS",
    price: 9499,
    category: "remeras",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce0ba1b69c61471da51faf1d0116017c_9366/Remera_de_Entrenamiento_Train_Essentials_Blanco_IC7430_21_model.jpg",
    stock: 16,
    description: "Remera versatil diseñada para entrenar",
  },
  {
    id: "3",
    name: "PANTALÓN DESIGNED FOR GAMEDAY",
    price: 24999,
    category: "pantalones",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/de51cf4e241742ad9530ada700e7da79_9366/Pantalon_Designed_for_Gameday_Negro_HE5038_21_model.jpg",
    stock: 10,
    description: "Pantalon largo deportivo running",
  },
  {
    id: "4",
    name: "PANTALÓN ADICOLOR NEUCLASSICS",
    price: 36999,
    category: "pantalones",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/92625bfea31240bd911fae7601319c2c_9366/Pantalon_Adicolor_Neuclassics_Amarillo_HM1863_21_model.jpg",
    stock: 25,
    description: "Pantalon deportivo con look moderno",
  },
  {
    id: "5",
    name: "ZAPATILLAS GALAXY 6",
    price: 23999,
    category: "zapatillas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1ccc8d7ff49c4c64a8fbaf7000dc3ba5_9366/Zapatillas_Galaxy_6_Negro_HP2423_01_standard.jpg",
    stock: 25,
    description: "Zapatilla deportiva y cómoda con la última tecnología",
  },
];

export const getIndumentary = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(clothing);
    }, 1500);
  });
};

export const getIndumentaryByCategory = (categoryId) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(clothing.filter((ind) => ind.category === categoryId));
    }, 1500);
  });
};

export const getIndumentaryById = (indumentaryId) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(clothing.find((ind) => ind.id === indumentaryId));
    }, 1500);
  });
};
