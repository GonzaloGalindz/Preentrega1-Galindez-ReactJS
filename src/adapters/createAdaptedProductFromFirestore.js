export const createAdaptedProductFromFirestore = (doc) => {
  const data = doc.data();

  const indumentaryAdapted = {
    id: doc.id,
    Name: data.Name,
    Img: data.Img,
    Price: data.Price,
    Stock: data.Stock,
    Category: data.Category,
    Description: data.Description,
  };

  return indumentaryAdapted;
};
