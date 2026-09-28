/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "modelimi-egitiyorum",
    "title": "Modelimi Eğitiyorum",
    "titleEn": "Training My Model",
    "grade": 6,
    "theme": "Yapay Zekâ",
    "code": "BTY.6.5.3",
    "outcome": "Yapay zekâ araç ve teknolojileri ile model geliştirebilme",
    "outcomeEn": "Developing a model with AI tools and technologies",
    "duration": 131.1,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 15.5,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 15.5,
      "t1": 44.5,
      "name": "Problem ve model",
      "en": "Problem and model",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 44.5,
      "t1": 61.5,
      "name": "Model yol haritası",
      "en": "Model roadmap",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 61.5,
      "t1": 93,
      "name": "Modeli uygula",
      "en": "Apply the model",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 93,
      "t1": 114.5,
      "name": "Süreci değerlendir",
      "en": "Evaluate",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 114.5,
      "t1": 131.1,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
