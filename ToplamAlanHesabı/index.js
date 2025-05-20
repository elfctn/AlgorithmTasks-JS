function totalArea(parcalar) {
  let toplamAlan = 0;

  for (const parca of parcalar) {
    const yukseklik = parca[0];
    const genislik = parca[1];
    const alan = yukseklik * genislik;
    toplamAlan += alan;
  }

  return toplamAlan;
}
