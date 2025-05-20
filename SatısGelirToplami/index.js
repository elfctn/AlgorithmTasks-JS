const calculateRevenue = (data, sellerType) => {
  return data
    .filter((car) => car.seller_type === sellerType)
    .reduce((totalRevenue, car) => totalRevenue + car.selling_price, 0);
};
