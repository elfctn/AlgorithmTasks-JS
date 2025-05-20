const analyzeData = (data, brand, year) => {
  const filteredCars = data.filter(
    (car) => car.name.includes(brand) && car.year === year
  );

  if (filteredCars.length === 0) {
    return `Model yılı ${year} olan ${brand} marka araba stoklarda bulunamamıştır!`;
  }

  const totalRevenue = filteredCars.reduce(
    (sum, car) => sum + car.selling_price,
    0
  );

  return `Model yılı ${year} olan ${brand} marka ${filteredCars.length} arabanın toplam piyasa değeri ${totalRevenue} TL'dir.`;
};
