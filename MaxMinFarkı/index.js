function difMaxMin(notlar) {
  // En büyük ve en küçük notları başlangıçta ilk not olarak kabul et
  let maxNot = notlar[0];
  let minNot = notlar[0];

  // Tüm notları döngü ile kontrol et
  for (not of notlar) {
    if (not > maxNot) {
      maxNot = not;
    }
    if (not < minNot) {
      minNot = not;
    }
  }

  // En büyük ve en küçük not arasındaki farkı döndür
  return maxNot - minNot;
}
