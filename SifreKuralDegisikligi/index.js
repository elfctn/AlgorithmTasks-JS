function resetNeeded(sifreler) {
  let hatalisifreler = [];

  for (sifre of sifreler) {
    if (
      sifre.length < 8 ||
      sifre.toLowerCase() === sifre ||
      sifre.toUpperCase() === sifre
    ) {
      hatalisifreler.push(sifre);
    }
  }
  return hatalisifreler;
}
