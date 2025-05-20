const convertCurrency = (data, exchangeRate) => {
  return data.map((car) => ({
    ...car,
    selling_price: car.selling_price * exchangeRate,
  }));
};
