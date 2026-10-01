# Veli Mail Aracı — Kurulum

Uygulama okulun Google hesapları üzerinden çalışır:

- Her öğretmen **okul Google hesabıyla** girer ve kendi sınıf listesini **bir kez** yükler.
- Liste öğretmenin kendi Google hesabında saklanır. Akıllı tahta, öğretmenler odası ve telefon dahil her cihazda aynı liste görünür.
- Bir öğretmen başka bir öğretmenin listesini göremez.
- Veli bilgileri okulun Google hesapları dışında hiçbir yere gönderilmez.

Kurulumu **bir kişinin bir kez** yapması yeterlidir. Ortaya çıkan link bütün öğretmenlerle paylaşılır.

> ⚠️ Öğrenci veya veli bilgisi içeren Excel dosyalarını bu depoya **koymayın**.

## 1. Projeyi oluşturun

1. Bilgisayarda **okul Google hesabınızla** <https://script.google.com> adresine girin. Kişisel Gmail hesabıyla yapmayın.
2. **Yeni proje**'ye tıklayın. Proje adını "Veli Mail Aracı" yapın.
3. Soldaki `Kod.gs` dosyasının içini tamamen silin. Bu depodaki `apps-script/Kod.gs` dosyasının içeriğini yapıştırın.
4. Soldaki **+** düğmesinden **HTML** seçin. Dosyanın adını tam olarak `Index` yazın (`.html` eklemeyin).
   Açılan dosyanın içini silin ve `apps-script/Index.html` dosyasının içeriğini yapıştırın.
5. Sol menüden ⚙️ **Proje Ayarları**'na girin ve **"appsscript.json" manifest dosyasını düzenleyicide göster** kutusunu işaretleyin.
   Düzenleyiciye dönün, `appsscript.json` dosyasının içine `apps-script/appsscript.json` dosyasının içeriğini yapıştırın.
6. 💾 ile kaydedin.

## 2. Web uygulaması olarak yayınlayın

1. Sağ üstten **Dağıt → Yeni dağıtım**'a tıklayın.
2. Tür olarak ⚙️ simgesinden **Web uygulaması**'nı seçin.
3. Ayarlar:
   - **Yürütme yetkisi:** *Web uygulamasına erişen kullanıcı*. Bu ayar önemli: her öğretmen kendi verisini görür.
   - **Erişimi olanlar:** *[okulunuzun adı] içindeki herkes*
4. **Dağıt**'a tıklayın. İstenirse izin verin.
5. Verilen **Web uygulaması URL**'sini kopyalayın. Öğretmenlerle paylaşacağınız link bu.

## 3. Öğretmenlerle paylaşın

- Linki öğretmenlere e-postayla gönderin.
- Telefonda linki açıp tarayıcı menüsünden **Ana ekrana ekle**'ye dokunun. Uygulama gibi açılır.
- Okul bilgisayarları için L:\ klasörüne linkin kısayolunu koyabilirsiniz.
- Her öğretmen ilk girişte bir kez Google izin ekranını onaylar. Uygulama yalnızca e-posta adresini görmek ve kendi kayıt alanını kullanmak için izin ister.

## Kullanım

1. **+ Öğrenci Ekle**'ye tıklayın ve müdür yardımcısından gelen Excel dosyasını hiç değiştirmeden sürükleyin. Her sınıf için bunu bir kez yapmanız yeterli.
2. Sınıfı ve öğrencileri seçin, şablonu seçin, **Gmail'de aç**'a tıklayın.
3. Ortak kullanılan bilgisayarlarda işiniz bitince sağ üstteki **Çıkış**'a tıklayın.

## Uygulamayı güncellemek

Depodaki dosyalar değiştiğinde:

1. Script düzenleyicide ilgili dosyanın içeriğini yenisiyle değiştirin ve kaydedin.
2. **Dağıt → Dağıtımları yönet**'e girin, ✏️ ile düzenleyin, **Sürüm: Yeni sürüm** seçip **Dağıt**'a tıklayın.

Link aynı kalır. Öğretmenlerin listeleri ve şablonları silinmez.

## Notlar

- Uygulama "Erişen kullanıcı olarak" çalıştığı için listeler kurulumu yapan kişinin hesabında değil, her öğretmenin kendi hesabında durur.
- Bir öğretmenin kayıt alanı yaklaşık 2.500 öğrenciye yetecek büyüklüktedir.
- `Index.html` dosyası doğrudan tarayıcıda da açılabilir. O zaman liste yalnızca o bilgisayarda saklanır. Bu kullanım deneme amaçlıdır.
