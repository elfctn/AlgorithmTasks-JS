const finallerdekiGolSayilari = (maclar) => {
  const finalMaclari = maclar.filter((mac) => mac.Stage === "Final");
  const takimGolSayilari = {};

  finalMaclari.forEach((mac) => {
    const evSahibiTakim = mac["Home Team Name"];
    const deplasmanTakimi = mac["Away Team Name"];
    const evSahibiGol = mac["Home Team Goals"];
    const deplasmanGol = mac["Away Team Goals"];

    takimGolSayilari[evSahibiTakim] =
      (takimGolSayilari[evSahibiTakim] || 0) + evSahibiGol;
    takimGolSayilari[deplasmanTakimi] =
      (takimGolSayilari[deplasmanTakimi] || 0) + deplasmanGol;
  });

  return takimGolSayilari;
};
