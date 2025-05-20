Gün Projesi: Final Maçı Özeti
100%
Volvo, Türkiye Basketbol Ligi'nin sponsoru olarak web sitesinde bir maç özeti simülatörü geliştirmek istiyor. Bu simülatör, oynanan maçların periyot periyot özetini ve sonucunu gösterecek.

Proje Tanımı
macOzeti isimli bir fonksiyon yazarak, iki takım arasında oynanan basketbol maçının periyot skorlarını ve sonucunu gösteren bir özet oluşturacağız.

Teknik Gereksinimler
A) Ana Fonksiyon: macOzeti

2 parametre alacak: evSahibiTakim ve deplasmanTakimi
Arrow function olarak yazılmalı
Bir dizi (array) döndürmeli

B) Fonksiyon İçeriği:

Her periyot için:

Her iki takım için 12-26 arası rastgele skor üretilmeli
Periyot skorları diziye eklenmeli
Format: "1. Periyot: {evSahibiTakim} 10 - {deplasmanTakimi} 21"
Maç Sonucu:

Ev sahibi kazanırsa: "Maç Sonucu: {evSahibiTakim} 61 - 54 kazandı"
Ev sahibi kaybederse: "Maç Sonucu: {evSahibiTakim} 61 - 68 kaybetti"
Beraberlik durumunda: "Maç 61 - 61 ile uzatmalara gitti"

Örnek Kullanım
[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

Kontrol Listesi
[ ] Fonksiyon arrow function olarak yazıldı mı?

[ ] İki takım adı parametre olarak alınıyor mu?

[ ] Her periyot için:

Rastgele skorlar 12-26 arasında mı?
Skor formatı doğru mu?
[ ] Maç sonucu doğru formatta mı?

[ ] Beraberlik durumu kontrol ediliyor mu?

[ ] Metinlerdeki boşluklar tam olarak örnek ile aynı mı?

İpuçları
String birleştirmelerinde + yerine backtick (`) kullanın

Rastgele sayı üretmek için: Math.floor(Math.random() \* (max - min + 1)) + min

Önce boş bir dizi oluşturup, içine periyot skorlarını ekleyin

Son olarak maç sonucunu ekleyin

Her aşamada konsola yazdırarak test edin

Not: String'lerdeki boşluklara özellikle dikkat edin, örneğin:

❌ "1.Periyot: Real Madrid 10-Barcelona 21"

✅ "1. Periyot: Real Madrid 10 - Barcelona 21"
