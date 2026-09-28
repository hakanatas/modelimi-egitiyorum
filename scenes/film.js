/* ─────────────────────────────────────────────────────────────
   MODELİMİ EĞİTİYORUM — BTY.6.5.3 (senaryo)
   Her vuruş bir altyazıdır: tr, en, note (öğretmen için seslendirme).
   Değiştirdikten sonra: npm run build
   ───────────────────────────────────────────────────────────── */
BF.defineFilm({
  meta: {
    slug: 'modelimi-egitiyorum', title: 'Modelimi Eğitiyorum', titleEn: 'Training My Model', code: 'BTY.6.5.3',
    outcomeEn: 'Developing a model with AI tools and technologies',
    summary: 'Okulda atıkların yanlış kutulara atılması gerçek hayat problemi olarak seçilir. Modelin, bir problemi anlamak ve çözmek için geliştirilen araç olduğu açıklanır. Kâğıt, plastik ve cam sınıfları için örnek fotoğraflar toplanır, model eğitilir ve yeni bir atıkla test edilir. Model plastik bardakta yanılınca daha çeşitli örnekler eklenip yeniden eğitilir. Son olarak modelin süreci ve sonuçları doğruluk, veri çeşitliliği ve kullanışlılık açısından değerlendirilir.',
    summaryEn: 'Karo picks a real problem (rubbish in the wrong bins), learns what a model is, collects photos for paper, plastic and glass, trains and tests a model, fixes a mistake by adding varied examples and retraining, and evaluates the process and results.',
    blurb: 'Gerçek hayat problemi, sınıflar ve örnekler, eğit-test et-geliştir, sonuçları değerlendirmek.',
    posterAlt: 'Başlık ve Karo; çevresinde model, veri kümesi, geri dönüşüm ve kamera karoları',
  },
  scenes: [
    { type: 'intro', icons: [{ icon: 'model', c: 'mor' }, { icon: 'dataset', c: 'safran' }, { icon: 'trash', c: 'zumrut' }, { icon: 'webcam', c: 'kobalt' }, { icon: 'faceScan', c: 'turkuaz' }, { icon: 'test', c: 'mercan' }, { icon: 'target', c: 'mercan' }, { icon: 'loop', c: 'turkuaz' }],
      beats: [
        { tr: 'Atıklar hep yanlış kutuya atılıyor!', en: 'Rubbish keeps going into the wrong bins!', extra: 1,
          note: 'Okulda geri dönüşüm kutuları var ama plastikler kâğıt kutusuna, camlar plastik kutusuna atılıyor. Karo bir çözüm arıyor.', karo: { mood: 'worried', caret: '!' } },
        { tr: 'Atığı tanıyan bir model yapalım!', en: 'Let\'s build a model that recognises rubbish!',
          note: 'Kameraya gösterilen atığın türünü söyleyen bir yapay zekâ modeli geliştirebiliriz.' },
      ] },
    { type: 'cards', name: 'Problem ve model', en: 'Problem and model', desc: 'Gerçek hayat problemi, model ve veri.', out: 'a',
      cards: [
        { word: 'PROBLEM', def: 'Atıklar yanlış kutulara atılıyor', icon: 'warning', c: 'mercan' },
        { word: 'MODEL', def: 'Problemi anlamak ve çözmek için geliştirilen araç', icon: 'model', c: 'mor' },
        { word: 'VERİ', def: 'Her atık türünden örnek fotoğraflar', icon: 'dataset', c: 'safran' },
      ],
      result: { word: 'ATIK TANIYAN MODEL', c: 'zumrut', chips: ['kâğıt', 'plastik', 'cam'], line: 'Model atığı görür, türünü söyler' },
      beats: [
        { tr: 'Problem: atıklar karışıyor', en: 'Problem: the rubbish gets mixed up',
          note: 'Problemimiz açık: atıklar yanlış kutulara atılıyor ve geri dönüşüm zorlaşıyor.' },
        { tr: 'Model: problemi çözmek için bir araç', en: 'Model: a tool to solve the problem',
          note: 'Model, gerçek bir durumu anlamak ve çözmek için geliştirilen bir araçtır. Bizim modelimiz atığın türünü tanıyacak.' },
        { tr: 'Veri: her türden örnek fotoğraf', en: 'Data: sample photos of each type',
          note: 'Modelin öğrenmesi için her atık türünden örnek fotoğraflara ihtiyacımız var.' },
        { tr: 'Model atığı görür, türünü söyler', en: 'The model sees the item and names its type', extra: 1,
          note: 'Hedefimiz: kameraya gösterilen atığın kâğıt mı, plastik mi, cam mı olduğunu söyleyen bir model.' },
      ] },
    { type: 'steps', name: 'Model yol haritası', en: 'Model roadmap', desc: 'Sınıflar, örnekler, eğitim, test ve geliştirme.', out: 'b', loop: 'geliştir',
      steps: [
        { icon: 'rubric', label: 'Sınıflar', text: 'Kâğıt, plastik, cam', c: 'kobalt' },
        { icon: 'webcam', label: 'Örnekler', text: 'Her sınıftan fotoğraf çek', c: 'safran' },
        { icon: 'model', label: 'Eğit', text: 'Model örneklerden öğrensin', c: 'mor' },
        { icon: 'test', label: 'Test et', text: 'Yeni bir atık göster', c: 'mercan' },
      ],
      beats: [
        { tr: 'Sınıfları belirle, örnekleri topla', en: 'Set the classes, collect examples', show: 2, extra: 1,
          note: 'Önce sınıfları belirleriz: kâğıt, plastik, cam. Sonra her sınıftan örnek fotoğraflar çekeriz.' },
        { tr: 'Eğit, test et, gerekirse geliştir', en: 'Train, test, improve if needed', show: 4, extra: 1,
          note: 'Modeli eğitir, daha önce görmediği bir atıkla test ederiz. Hata yaparsa daha çok örnek ekleyip yeniden eğitiriz.' },
      ] },
    { type: 'app', app: 'model', title: 'Model Eğitme Aracı', name: 'Modeli uygula', en: 'Apply the model', desc: 'Sınıflar, örnekler, eğitim, test, hata ve yeniden eğitim.', out: 'b, c',
      data: {
        classes: [{ name: 'Kâğıt', icon: 'doc', c: 'kobalt', n: 12, n2: 12 }, { name: 'Plastik', icon: 'water', c: 'safran', n: 6, n2: 18 }, { name: 'Cam', icon: 'lightbulb', c: 'zumrut', n: 12, n2: 12 }],
        test: { icon: 'magazine', name: 'Eski gazete', probs: [0.94, 0.04, 0.02] },
        test2: { icon: 'water', name: 'Şeffaf plastik bardak', probs: [0.08, 0.30, 0.62], probs2: [0.03, 0.91, 0.06] } },
      tools: [{ id: 'classes', label: 'Sınıflar' }, { id: 'samples', label: 'Örnekler' }, { id: 'train', label: 'Eğit' }, { id: 'test', label: 'Test' }, { id: 'test2', label: 'Test 2' }, { id: 'more', label: 'Örnek ekle' }, { id: 'retrain', label: 'Yeniden eğit' }],
      beats: [
        { tr: 'Sınıfları oluştur, örnekleri yükle', en: 'Create the classes and add examples', tools: ['classes', 'samples'], hint: 'Kâğıt 12, plastik 6, cam 12',
          note: 'Üç sınıf oluşturur ve fotoğrafları yükleriz. Plastikten yalnızca altı örneğimiz var.' },
        { tr: 'Modeli eğit ve eski gazeteyle test et', en: 'Train the model and test it with an old newspaper', tools: ['train', 'test'], hint: 'Kâğıt: %94', extra: 1,
          note: 'Modeli eğitiriz. Eski bir gazeteyi gösterince model yüzde doksan dört ihtimalle kâğıt diyor. Doğru!' },
        { tr: 'Şeffaf plastik bardakta yanıldı!', en: 'It got the clear plastic cup wrong!', tool: 'test2', hint: 'Cam sandı: %62', extra: 1,
          note: 'Şeffaf bir plastik bardak gösterince model onu cam sandı. Neden? Plastik örneklerimiz az ve hiçbiri şeffaf değildi.', karo: { mood: 'surprised', caret: '!' } },
        { tr: 'Çeşitli örnek ekle, yeniden eğit', en: 'Add varied examples and retrain', tools: ['more', 'retrain'], hint: 'Plastik 18 örnek → %91', extra: 1.5,
          note: 'Şeffaf şişeler ve bardaklar dahil on iki plastik örneği daha ekleyip modeli yeniden eğitiriz. Şimdi yüzde doksan bir ihtimalle plastik diyor!' },
      ] },
    { type: 'judge', name: 'Süreci değerlendir', en: 'Evaluate', desc: 'Modelin süreci ve sonuçları değerlendirilir.', out: 'ç', labels: { ok: 'başarılı', no: 'geliştir' },
      beats: [
        { tr: 'Yirmi testte on dokuz doğru', en: 'Nineteen right out of twenty tests',
          note: 'Modeli yirmi farklı atıkla test ettik; on dokuzunu doğru bildi. Sonuç başarılı.',
          row: { icon: 'test', text: 'Model 20 testin 19\'unda doğru tahmin yaptı', ok: true, why: 'Doğruluk yüksek' } },
        { tr: 'Karanlık fotoğraflarda hata yapıyor', en: 'It makes mistakes in dark photos',
          note: 'Karanlık ortamda çekilen fotoğraflarda model zorlanıyor. Farklı ışıkta çekilmiş örnekler eklemeliyiz.',
          row: { icon: 'eye', text: 'Karanlıkta çekilen fotoğraflarda sık sık yanılıyor', ok: false, why: 'Farklı ışıkta örnek ekle' } },
        { tr: 'Model gerçekten işe yarıyor mu?', en: 'Does the model really help?',
          note: 'Model kantinde denendi; öğrenciler atıkları doğru kutuya atmaya başladı. Problemimize çözüm oldu.',
          row: { icon: 'trash', text: 'Kantinde denedik; atıklar doğru kutulara atılıyor', ok: true, why: 'Probleme çözüm oldu' } },
      ] },
    { type: 'summary',
      lines: [
        { icon: 'target', c: 'mercan', text: 'Gerçek bir problem seç' },
        { icon: 'dataset', c: 'safran', text: 'Çeşitli örneklerle modeli eğit' },
        { icon: 'loop', c: 'turkuaz', text: 'Test et, değerlendir, geliştir' },
      ],
      beats: [
        { tr: 'Aklında kalsın: model, verdiğin örnekler kadar iyidir', en: 'Remember: a model is only as good as its examples',
          note: 'Aklında kalsın: model, ona verdiğin örnekler kadar iyidir. Çeşitli örnekler, daha doğru sonuçlar.' },
        { tr: 'Sen öğret, model öğrensin!', en: 'You teach, the model learns!',
          note: 'Artık sen de bir model eğitebilirsin!' },
      ] },
  ],
});
