Görev : Şifre Kurallarında Değişiklik
100%
Çalıştığın şirket aldığı yatırım sonucu büyümeye başladı. Büyük şirket büyük sorumluluk demek. Güvenlik risklerini azaltmak için çalışanların şifrelerinin daha güvenli olmasını istiyorlar. Bunun için şifreleri oluştururken dikkat edilmesi gereken kuralları değiştirdiler. Bu kurallara uymayan kişilerin şifrelerini değiştirmelerini isteyecekler.

Adı resetNeeded olan bir fonksiyon yazalım.
Bu fonksiyon kullanıcı şifrelerinden oluşan bir array'i parametre olarak alsın.
Yeni şifre kurallarına uymayan şifreleri bir liste olarak dönsün.
Yeni şifre kuralları:
en az 8 karakter uzunluğunda olmalı,
en az 1 büyük harf ve 1 küçük harf içermeli,
Örnek Kullanım:

resetNeeded(["Axy1", "aytemiz123", "eRDeM1234", "Hatice12"])

// ["Axy1", "aytemiz123"] dönmeli
İpucu: .toLowerCase() metodunu kullanarak bir karşılaştırma yapabilirsin.
İpucu: döngü yapma, .push(), boş array [], .length yardımcı olabilir.
