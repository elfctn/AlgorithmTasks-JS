Gün Projesi: Emeklilikte Yaşa Takılanlar(EYT) Hesabı
100%
Emeklilikte Yaşa Takılanlar için devlet kanunda geçici bir düzenleme yayınladı. İlk işe giriş tarihi 1999 ve öncesi olup, kadınlarda 20 yıl, erkeklerde 25 yıl sigortalı olanlar, 5000 gün üzerinde prim yatırmış olma şartı ile EYT düzenlemesi ile erkenden emekli olabiliyor.

Çalıştığın şirketin İnsan Kaynakları(İK) departmanı da senden 3 bilgiyi çıkartmanı istedi: 1- emekli olabileceklerin listesi 2- emekli olanlardan sonra kalan güncel çalışan listesi 3- emekli olanlardan sonra şirketin kalan toplam maaş gideri

İK, çalışan bilgilerini içeren bir liste hazırladı. Bu listede her çalışan için gerekli bilgiler var: [calisanAdi, cinsiyet, iseGirisTarihi, sigortaliYillar, primGunSayisi, guncelMaas]

İstenen bilgileri verebilmek için eytDetaylari adında bir fonksiyon yazalım.
Bu fonksiyon çalışan bilgilerinden oluşan bir array'i parametre olarak alsın.
Geriye bir array olarak [eytliListesi, guncelCalisanListesi, toplamMaasGideri] şeklinde istenen bilgileri geri dönsün.
Örnek Kullanım: const calisanListesi = [ ["Hatice", "Kadın", 1999, 21, 5200, 50000], ["Muhammed", "Erkek", 2001, 22, 5001, 80000], ["Halime", "Kadın", 1995, 17, 5101, 90000], ["Fatma", "Kadın", 2015, 8, 2200, 110000], ["Mehmet Ali", "Erkek", 1994, 26, 4000, 40000], ["Ramazan", "Erkek", 1992, 26, 8200, 75000], ["Furkan", "Erkek", 1999, 24, 3500, 52000], ["Sultan", "Kadın", 2001, 16, 5001, 78000], ["Kadir", "Erkek", 1985, 27, 8000, 150000], ["Şükrü", "Erkek", 2021, 1, 500, 20000], ] eytDetaylari(calisanListesi) aşağıdakini geri dönmeli. [ ["Hatice", "Ramazan", "Kadir"], ["Muhammed", "Halime", "Fatma", "Mehmet Ali", "Furkan", "Sultan", "Şükrü"], 470000 ]

Dikkat:

Geri dönen bilgi array olmalı,
3 elemanlı olmalı,
İlk 2 elemanı gene bir array olmalı, sadece çalışan adlarını içermeli,
3.eleman bir sayı olmalı, kalanların toplam maaşını vermeli.
