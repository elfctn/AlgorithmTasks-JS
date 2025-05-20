function eytDetaylari(calisanListesi) {
  const eytliListesi = [];
  const guncelCalisanListesi = [];
  let toplamMaasGideri = 0;

  for (const calisan of calisanListesi) {
    const [
      ad,
      cinsiyet,
      iseGirisTarihi,
      sigortaliYillar,
      primGunSayisi,
      guncelMaas,
    ] = calisan;

    // EYT şartlarını kontrol et
    const eytHakEder =
      iseGirisTarihi <= 1999 &&
      primGunSayisi >= 5000 &&
      ((cinsiyet === "Kadın" && sigortaliYillar >= 20) ||
        (cinsiyet === "Erkek" && sigortaliYillar >= 25));

    if (eytHakEder) {
      eytliListesi.push(ad);
    } else {
      guncelCalisanListesi.push(ad);
      toplamMaasGideri += guncelMaas;
    }
  }

  return [eytliListesi, guncelCalisanListesi, toplamMaasGideri];
}
