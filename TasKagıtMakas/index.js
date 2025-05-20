function tasKagitMakas(kullaniciSecimi) {
  const secenekler = ["taş", "kağıt", "makas"];
  const bilgisayarSecimi = secenekler[Math.floor(Math.random() * 3)];

  if (kullaniciSecimi === bilgisayarSecimi) {
    return `Senin seçimin: ${kullaniciSecimi}. Bilgisayarın seçimi: ${bilgisayarSecimi}. Beraberlik!`;
  } else if (
    (kullaniciSecimi === "taş" && bilgisayarSecimi === "makas") ||
    (kullaniciSecimi === "kağıt" && bilgisayarSecimi === "taş") ||
    (kullaniciSecimi === "makas" && bilgisayarSecimi === "kağıt")
  ) {
    return `Senin seçimin: ${kullaniciSecimi}. Bilgisayarın seçimi: ${bilgisayarSecimi}. Kazandın!`;
  } else {
    return `Senin seçimin: ${kullaniciSecimi}. Bilgisayarın seçimi: ${bilgisayarSecimi}. Kaybettin!`;
  }
}
