const countStock = (data, brand) => {
  const brandCars = data.filter((car) => car.name.includes(brand));
  const stockCount = {};

  brandCars.forEach((car) => {
    stockCount[car.year] = (stockCount[car.year] || 0) + 1;
  });

  return stockCount;
};
