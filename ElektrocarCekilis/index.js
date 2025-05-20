module.exports = lottery;

function lottery(array) {
  let ilkBes = array.slice(0, 5); // İlk 5 elemanı al
  let onlukBes = [array[9], array[19], array[29], array[39], array[49]]; // 10. ve katlarındaki elemanları al
  let secilenler = ilkBes.concat(onlukBes); // İki listeyi birleştir

  let kalanlar = array.slice(5); // İlk 5 elemanı çıkarma
  kalanlar.splice(9 - 5, 1); // 10. elemanı listeden çıkarma (0'dan başladığı için 9. indeks)
  kalanlar.splice(19 - 5 - 1, 1); // 20. elemanı listeden çıkarma (1 eksiltme yapmamız gerekiyor)
  kalanlar.splice(29 - 5 - 2, 1); // 30. elemanı listeden çıkarma (2 eksiltme yapmamız gerekiyor)
  kalanlar.splice(39 - 5 - 3, 1); // 40. elemanı listeden çıkarma (3 eksiltme yapmamız gerekiyor)
  kalanlar.splice(49 - 5 - 4, 1); // 50. elemanı listeden çıkarma (4 eksiltme yapmamız gerekiyor)

  // Rastgele bir eleman seçimi (kalanlar içinden)
  let rastgeleIndex = Math.floor(Math.random() * kalanlar.length);
  secilenler.push(kalanlar[rastgeleIndex]);

  return secilenler;
}
