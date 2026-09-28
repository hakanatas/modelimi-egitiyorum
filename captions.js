/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 7.6, tr: "Atıklar hep yanlış kutuya atılıyor!", en: "Rubbish keeps going into the wrong bins!",
      note: "Okulda geri dönüşüm kutuları var ama plastikler kâğıt kutusuna, camlar plastik kutusuna atılıyor. Karo bir çözüm arıyor." },
    { scene: 1, start: 8.4, end: 14.2, tr: "Atığı tanıyan bir model yapalım!", en: "Let's build a model that recognises rubbish!",
      note: "Kameraya gösterilen atığın türünü söyleyen bir yapay zekâ modeli geliştirebiliriz." },
    { scene: 2, start: 17, end: 22.7, tr: "Problem: atıklar karışıyor", en: "Problem: the rubbish gets mixed up",
      note: "Problemimiz açık: atıklar yanlış kutulara atılıyor ve geri dönüşüm zorlaşıyor." },
    { scene: 2, start: 23.5, end: 29.2, tr: "Model: problemi çözmek için bir araç", en: "Model: a tool to solve the problem",
      note: "Model, gerçek bir durumu anlamak ve çözmek için geliştirilen bir araçtır. Bizim modelimiz atığın türünü tanıyacak." },
    { scene: 2, start: 30, end: 35.6, tr: "Veri: her türden örnek fotoğraf", en: "Data: sample photos of each type",
      note: "Modelin öğrenmesi için her atık türünden örnek fotoğraflara ihtiyacımız var." },
    { scene: 2, start: 36.5, end: 43.1, tr: "Model atığı görür, türünü söyler", en: "The model sees the item and names its type",
      note: "Hedefimiz: kameraya gösterilen atığın kâğıt mı, plastik mi, cam mı olduğunu söyleyen bir model." },
    { scene: 3, start: 46, end: 52.6, tr: "Sınıfları belirle, örnekleri topla", en: "Set the classes, collect examples",
      note: "Önce sınıfları belirleriz: kâğıt, plastik, cam. Sonra her sınıftan örnek fotoğraflar çekeriz." },
    { scene: 3, start: 53.5, end: 60.1, tr: "Eğit, test et, gerekirse geliştir", en: "Train, test, improve if needed",
      note: "Modeli eğitir, daha önce görmediği bir atıkla test ederiz. Hata yaparsa daha çok örnek ekleyip yeniden eğitiriz." },
    { scene: 4, start: 63, end: 68.6, tr: "Sınıfları oluştur, örnekleri yükle", en: "Create the classes and add examples",
      note: "Üç sınıf oluşturur ve fotoğrafları yükleriz. Plastikten yalnızca altı örneğimiz var." },
    { scene: 4, start: 69.4, end: 76.1, tr: "Modeli eğit ve eski gazeteyle test et", en: "Train the model and test it with an old newspaper",
      note: "Modeli eğitiriz. Eski bir gazeteyi gösterince model yüzde doksan dört ihtimalle kâğıt diyor. Doğru!" },
    { scene: 4, start: 76.9, end: 83.6, tr: "Şeffaf plastik bardakta yanıldı!", en: "It got the clear plastic cup wrong!",
      note: "Şeffaf bir plastik bardak gösterince model onu cam sandı. Neden? Plastik örneklerimiz az ve hiçbiri şeffaf değildi." },
    { scene: 4, start: 84.4, end: 91.6, tr: "Çeşitli örnek ekle, yeniden eğit", en: "Add varied examples and retrain",
      note: "Şeffaf şişeler ve bardaklar dahil on iki plastik örneği daha ekleyip modeli yeniden eğitiriz. Şimdi yüzde doksan bir ihtimalle plastik diyor!" },
    { scene: 5, start: 94.4, end: 100.1, tr: "Yirmi testte on dokuz doğru", en: "Nineteen right out of twenty tests",
      note: "Modeli yirmi farklı atıkla test ettik; on dokuzunu doğru bildi. Sonuç başarılı." },
    { scene: 5, start: 100.9, end: 106.6, tr: "Karanlık fotoğraflarda hata yapıyor", en: "It makes mistakes in dark photos",
      note: "Karanlık ortamda çekilen fotoğraflarda model zorlanıyor. Farklı ışıkta çekilmiş örnekler eklemeliyiz." },
    { scene: 5, start: 107.4, end: 113.1, tr: "Model gerçekten işe yarıyor mu?", en: "Does the model really help?",
      note: "Model kantinde denendi; öğrenciler atıkları doğru kutuya atmaya başladı. Problemimize çözüm oldu." },
    { scene: 6, start: 115.9, end: 123.2, tr: "Aklında kalsın: model, verdiğin örnekler kadar iyidir", en: "Remember: a model is only as good as its examples",
      note: "Aklında kalsın: model, ona verdiğin örnekler kadar iyidir. Çeşitli örnekler, daha doğru sonuçlar." },
    { scene: 6, start: 124, end: 129.8, tr: "Sen öğret, model öğrensin!", en: "You teach, the model learns!",
      note: "Artık sen de bir model eğitebilirsin!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
