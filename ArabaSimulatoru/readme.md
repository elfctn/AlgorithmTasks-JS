Gün Projesi: Araba Simülatörü
100%
Proje Tanımı
Volvo firması web sitesinde bir araba simülatörü geliştirmenizi istiyor. Bu simülatör sayesinde kullanıcılar sanal bir araba oluşturup, bu arabayla çeşitli işlemler (yakıt alma, kullanma gibi) yapabilecekler.

Teknik Gereksinimler
A. Ana Fonksiyon: carSimulator

4 parametre alacak: marka, model, kilometre, fiyat
Bu parametrelerle bir nesne oluşturacak
Yeni oluşturulan arabanın deposu yarı dolu olacak (depo: 50)

B. Object Metodları:

[ ] getPrice metodu:

Arabanın fiyatını gösteren bir mesaj döndürecek

[ ] refuel metodu:

Parametre: Eklenecek yakıt miktarı
Depoyu dolduracak
Depo 100'ü geçemez
Depodaki yakıt oranını gösteren mesaj döndürecek

[ ] drive metodu:

Parametre: Gidilecek kilometre
Arabanın km'sine ekleme yapacak
Her 100 km'de:
5 litre yakıt harcayacak
Arabanın değeri 50 TL düşecek
Güncel km bilgisini mesaj olarak döndürecek

Örnek Kullanım
[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

Kontrol Listesi
[ ] carSimulator fonksiyonu doğru parametrelerle oluşturuldu mu?

[ ] Yeni araba oluşturulduğunda depo yarı dolu mu?

[ ] getPrice metodu doğru mesajı dönüyor mu?

[ ] refuel metodu:

Yakıt ekliyor mu?
Depo limiti kontrol ediliyor mu?
Doğru mesaj dönüyor mu?
[ ] drive metodu:

Kilometreyi artırıyor mu?
Yakıt tüketimi hesaplanıyor mu?
Değer kaybı hesaplanıyor mu?
Doğru mesaj dönüyor mu?

İpuçları
Önce ana fonksiyonu oluşturun
Sonra metodları tek tek ekleyin
Her metodu ekledikten sonra test edin
Matematiksel işlemleri kontrol edin
Mesaj formatlarına dikkat edin
