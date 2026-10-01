/**
 * Veli Mail Aracı — Google Apps Script sunucu tarafı.
 *
 * Web uygulaması "Erişen kullanıcı olarak çalıştır" şeklinde yayınlanır.
 * Böylece her öğretmenin öğrenci listesi ve şablonları kendi Google hesabının
 * UserProperties alanında durur: başka öğretmen göremez, öğretmen hangi
 * cihazdan girerse girsin aynı listeyi görür.
 */

// Tek bir UserProperties değeri en fazla ~9 KB olabiliyor; veriyi parçalara bölüyoruz.
const PARCA_BOYU = 8000;
// UserProperties toplam sınırı ~500 KB; biraz pay bırakıyoruz.
const AZAMI_BOYUT = 450000;
const ANAHTARLAR = ['ogrenciler', 'sablonlar'];

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Veli Mail Aracı')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/** Sayfa açılışında çağrılır: kullanıcının e-postası ve kayıtlı verileri (JSON metni olarak). */
function veriGetir() {
  const p = PropertiesService.getUserProperties();
  return {
    email: Session.getActiveUser().getEmail(),
    ogrenciler: oku_(p, 'ogrenciler'),
    sablonlar: oku_(p, 'sablonlar')
  };
}

/** anahtar: 'ogrenciler' | 'sablonlar', json: kaydedilecek JSON metni */
function veriKaydet(anahtar, json) {
  if (ANAHTARLAR.indexOf(anahtar) < 0) throw new Error('Geçersiz anahtar: ' + anahtar);
  if (typeof json !== 'string') throw new Error('Geçersiz veri');
  JSON.parse(json); // bozuk veri kaydedilmesin

  const kilit = LockService.getUserLock();
  kilit.waitLock(10000);
  try {
    const p = PropertiesService.getUserProperties();
    const digerAnahtar = ANAHTARLAR.filter(function (a) { return a !== anahtar; })[0];
    const digerBoyut = (oku_(p, digerAnahtar) || '').length;
    if (json.length + digerBoyut > AZAMI_BOYUT) {
      throw new Error('Kayıt alanı doldu. Kullanmadığınız sınıfları silip tekrar deneyin.');
    }
    yaz_(p, anahtar, json);
  } finally {
    kilit.releaseLock();
  }
  return true;
}

function oku_(p, anahtar) {
  const n = Number(p.getProperty(anahtar + '_n') || 0);
  if (!n) return null;
  let s = '';
  for (let i = 0; i < n; i++) s += p.getProperty(anahtar + '_' + i) || '';
  return s;
}

function yaz_(p, anahtar, json) {
  const eskiN = Number(p.getProperty(anahtar + '_n') || 0);
  const yeni = {};
  let n = 0;
  for (let i = 0; i < json.length; i += PARCA_BOYU) {
    yeni[anahtar + '_' + n] = json.substring(i, i + PARCA_BOYU);
    n++;
  }
  yeni[anahtar + '_n'] = String(n);
  p.setProperties(yeni);
  for (let i = n; i < eskiN; i++) p.deleteProperty(anahtar + '_' + i);
}
