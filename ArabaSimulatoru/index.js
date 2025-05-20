function newCar(carObject) {
  const copyCar = { ...carObject };

  copyCar.otv = copyCar.fiyat > 1450000 ? 40 : 10;
  copyCar.mtv = copyCar.yas > 10 ? 520 : 1773;

  const markaModelArr = copyCar.model.split(" ");

  copyCar.marka = markaModelArr[0];
  copyCar.model = markaModelArr[1];

  copyCar.isDomestic = markaModelArr[0] === "TOGG";

  delete copyCar.yas;

  return copyCar;
}
