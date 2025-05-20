function myCharacter(cevaplar) {
  const puanlar = {
    1: { a: 20, b: 10, c: 5 },
    2: { a: 10, b: 5, c: 20 },
    3: { a: 5, b: 20, c: 10 },
    4: { a: 5, b: 10, c: 20 },
    5: { a: 10, b: 20, c: 5 },
  };

  let total = 0;

  for (let i = 0; i < cevaplar.length; i++) {
    const soruNumarasi = i + 1;
    const cevap = cevaplar[i];
    total += puanlar[soruNumarasi][cevap];
  }

  if (total >= 80 && total <= 100) {
    return "Cesur";
  } else if (total >= 50 && total <= 79) {
    return "Düşünceli";
  } else {
    return "Sevimli";
  }
}
