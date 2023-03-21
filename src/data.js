const data = [
  {
    id: 1,
    name: "Happiness",
    price: "free",
  },

  {
    id: 2,
    name: "PS5",
    price: "100",
  },

  {
    id: 3,
    name: "product 3",
    price: "200",
  },
  {
    id: 4,
    name: "product4",
    price: "500",
  },
];

const getProductId = (id) => {
  /// actually returns product data
  let productId = data.find((i) => i.id === id);

  if (productId == undefined) {
    console.log(`product data doesn't exist: ${id}`);
    return undefined;
  }

  return productId;
};

export { data, getProductId };
