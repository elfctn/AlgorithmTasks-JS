function tutarHesapla(isimler) {
  let ahmetHarfleri = ["a", "h", "m", "e", "t"];
  let toplamTekrarSayisi = 0;

  //ahmetin harfler için bir döngü yaptım ve
  for (let h = 0; h < ahmetHarfleri.length; h++) {
    let harf = ahmetHarfleri[h];

    //yardım yapan her isim için döngü yaptım ve tüm harfleri küçükharfe çevirmiş oldum ve ona da isim değişkeni olarak tanımladım
    for (let i = 0; i < isimler.length; i++) {
      let isim = isimler[i].toLowerCase();

      //yardım yapanların isimlerinde ahmetin harfleri var mı ona baktım eğer varsa bulması için if bloğu açtım ve arttırdım
      for (let z = 0; z < isim.length; z++) {
        if (isim[z] === harf) {
          toplamTekrarSayisi++;
        }
      }
    }
  }
  return toplamTekrarSayisi * 1000;
}
let yardimYapanlar = [
  "Leyla Mert",
  "Fevzi Kaya",
  "Aysel Hataylı",
  "Furkan Menekşe",
  "Zeliha Aydın",
];
let toplamTutar = tutarHesapla(yardimYapanlar);
console.log(toplamTutar); ///console da bak sonuç 23000 döndü
