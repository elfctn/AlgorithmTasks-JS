const getRiskyCarList = (data) => {
  return data.filter((car) => {
    return (
      car.km_driven >= 250000 ||
      car.year <= 2003 ||
      car.owner === "Dördüncü veya Daha Fazla Sahibi"
    );
  });
};
