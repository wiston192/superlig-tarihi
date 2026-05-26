const TEAMS = [
  {
    id: 1,
    name: "Galatasaray",
    shortName: "GS",
    city: "İstanbul",
    founded: 1905,
    stadium: "RAMS Park",
    stadiumCapacity: "52.900",
    president: "Dursun Özbek",
    colors: "Sarı & Kırmızı",
    league2026: 1,
    titles: { superLig: 24, turkiyeKupasi: 18, superKupa: 16, avrupa: 1 },
    excerpt: "Galatasaray, Türk futbolunun en köklü ve başarılı kulüplerinden biridir. UEFA Kupası kazanan tek Türk takımı olma özelliğini taşır.",
    history: "Galatasaray Spor Kulübü, 1905 yılında Fransız okulundan mezun Ali Sami Yen tarafından Galatasaray Lisesi'nde kuruldu. Türkiye'nin en eski ve en köklü kulüplerinden biri olan Galatasaray, kısa sürede İstanbul'un ve Türkiye'nin en büyük kulübü haline geldi. Kuruluşundan bu yana Türk futboluna yön veren Galatasaray, 1950'lerden itibaren sürekli olarak büyük başarılar elde etmeye devam etti.",
    goldenEra: "2000 yılı Galatasaray için altın yıl oldu. Fatih Terim yönetimindeki takım, UEFA Kupası'nı ve ardından UEFA Süper Kupası'nı kazandı. Hakan Şükür, Bülent Korkmaz, Claudio Taffarel, Hasan Şaş ve Süleyman Seba gibi efsane isimler bu dönemin mimarlarıydı. Galatasaray'ın Avrupa'daki bu başarısı, Türk futbolunun kıta üzerindeki en büyük zaferi olarak tarihe geçti.",
    currentStatus: "2025-2026 sezonunda Trendyol Süper Lig'i 77 puanla lider bitiren Galatasaray, 24. şampiyonluğuna ulaştı. Okan Buruk yönetimindeki takım, Icardi ve Zaha gibi yıldız isimlerle kadrosunu güçlendirdi.",
    legends: ["Hakan Şükür", "Taffarel", "Bülent Korkmaz", "Metin Oktay", "Fatih Terim", "Hakan Şükür", "Graeme Souness"],
    timeline: [
      { year: "1905", event: "Ali Sami Yen tarafından Galatasaray Lisesi'nde kuruldu" },
      { year: "1909", event: "İlk resmi şampiyonluğunu kazandı" },
      { year: "1969", event: "Metin Oktay döneminde Avrupa sahnesinde adını duyurdu" },
      { year: "1993", event: "Fenerbahçe ile rekabette tarihi Kadıköy galibiyeti" },
      { year: "2000", event: "UEFA Kupası ve UEFA Süper Kupası'nı kazandı – Türk futbolunun Avrupa'daki zirvesi" },
      { year: "2013", event: "Fatih Terim ile Şampiyonlar Ligi grup aşamasında tarihi performans" },
      { year: "2023", event: "Süper Lig'de 23. şampiyonluk, Okan Buruk dönemi" },
      { year: "2026", event: "24. lig şampiyonluğunu 77 puanla kazandı" }
    ],
    tags: ["UEFA Kupası", "24 Şampiyonluk", "En Köklü"],
    category: "istanbul"
  },
  {
    id: 2,
    name: "Fenerbahçe",
    shortName: "FB",
    city: "İstanbul",
    founded: 1907,
    stadium: "Ülker Stadyumu",
    stadiumCapacity: "50.500",
    president: "Ali Koç",
    colors: "Sarı & Lacivert",
    league2026: 2,
    titles: { superLig: 19, turkiyeKupasi: 6, superKupa: 9, avrupa: 0 },
    excerpt: "Fenerbahçe, Türkiye'nin en fazla taraftara sahip kulübü olarak bilinmektedir. Anadolu yakasının ve Türk futbolunun sembolüdür.",
    history: "Fenerbahçe Spor Kulübü, 1907 yılında İstanbul'un Anadolu yakasındaki Fenerbahçe semtinde kuruldu. Kuruluşundan itibaren Türk futbolunun en prestijli kulüplerinden biri olan Fenerbahçe, Galatasaray ile sürdürdüğü dev rekabet Türk futbolunun en büyük klasiği haline geldi. Kulüp, futbolun yanı sıra basketbol, atletizm ve diğer branşlarda da büyük başarılar elde etti.",
    goldenEra: "2004-2011 döneminde Aziz Yıldırım başkanlığında ve çeşitli teknik direktörlerle Fenerbahçe üst üste şampiyonluklar kazandı. Alex de Souza bu dönemin en ikonik ismi oldu. Brezilyalı yıldızın gösterdiği performans, Fenerbahçe taraftarları tarafından efsane olarak kabul edildi. 2008 Şampiyonlar Ligi'nde yarı finale çıkma başarısı da bu dönemin önemli başarılarındandır.",
    currentStatus: "2025-2026 sezonunda 74 puanla 2. sırада biten Fenerbahçe, Jose Mourinho yönetiminde önemli bir dönüşüm yaşadı. Victor Osimhen ve Dusan Tadic takımın yıldızları oldu.",
    legends: ["Alex de Souza", "İlhan Mansız", "Can Bartu", "Lefter Küçükandonyadis", "Samet Aybaba", "Zico"],
    timeline: [
      { year: "1907", event: "İstanbul Anadolu yakasında Fenerbahçe semtinde kuruldu" },
      { year: "1959", event: "Türkiye Ligi'nin ilk resmi sezonunda şampiyon oldu" },
      { year: "1968", event: "Lefter Küçükandonyadis ile unutulmaz dönem" },
      { year: "2008", event: "Şampiyonlar Ligi'nde çeyrek final – Türk futbolu için tarihi başarı" },
      { year: "2011", event: "4 sezon üst üste şampiyonluk hedefine ulaşıldı" },
      { year: "2014", event: "Şike davasından beraat kararı, güç kaybı yaşandı" },
      { year: "2023", event: "Ismail Kartal ile şampiyonluk yarışı" },
      { year: "2024", event: "Jose Mourinho Fenerbahçe'nin başına geçti" }
    ],
    tags: ["19 Şampiyonluk", "En Fazla Taraftar", "Mourinho"],
    category: "istanbul"
  },
  {
    id: 3,
    name: "Beşiktaş",
    shortName: "BJK",
    city: "İstanbul",
    founded: 1903,
    stadium: "Tüpraş Stadyumu",
    stadiumCapacity: "42.849",
    president: "Hasan Arat",
    colors: "Siyah & Beyaz",
    league2026: 4,
    titles: { superLig: 16, turkiyeKupasi: 9, superKupa: 8, avrupa: 0 },
    excerpt: "Beşiktaş, 1903'te kurulan Türkiye'nin en eski spor kulübüdür. Siyah-beyaz renkleriyle Türk futbolunun simgelerinden biridir.",
    history: "Beşiktaş Jimnastik Kulübü, 1903 yılında İstanbul'un Beşiktaş semtinde kuruldu ve Türkiye'nin en eski spor kulübü unvanını taşımaktadır. Başlangıçta jimnastik kulübü olarak kurulan Beşiktaş, kısa süre sonra futbola yöneldi ve Türk futbolunun en önemli kulüplerinden biri haline geldi. Siyah-beyaz renkleri ve kartal amblemi ile özdeşleşen kulüp, yüzyılı aşkın tarihiyle derin bir kimliğe sahiptir.",
    goldenEra: "Şenol Güneş yönetimindeki 2015-2017 dönemi, Beşiktaş'ın modern tarihinin en parlak sayfalarından birini oluşturdu. Cenk Tosun, Pepe, Vagner Love ve Ricardo Quaresma ile oluşturulan kadroyla üst üste iki kez lig şampiyonluğu kazanıldı. 2016-17 Şampiyonlar Ligi'nde grubunu birinci bitirme başarısı bu dönemin taçlandı.",
    currentStatus: "2025-2026 sezonunda 60 puanla 4. sırада biten Beşiktaş, Hasan Arat başkanlığı döneminde yeniden yapılanma sürecini sürdürmektedir. Rafa Silva ve Ernest Muçi takımın önemli isimleri arasında yer aldı.",
    legends: ["Feyyaz Uçar", "Şükrü Gülesin", "Metin Türel", "Sergen Yalçın", "Gökhan İnler", "Demba Ba"],
    timeline: [
      { year: "1903", event: "Türkiye'nin en eski spor kulübü olarak Beşiktaş'ta kuruldu" },
      { year: "1934", event: "İlk Milli Lig şampiyonluğunu kazandı" },
      { year: "1966", event: "Şükrü Gülesin ile altın dönem" },
      { year: "1986", event: "Gordon Milne ile şampiyonluk ve Avrupa'da başarılı performanslar" },
      { year: "1995", event: "Rıdvan Dilmen yönetiminde süper kupa ve lig şampiyonluğu" },
      { year: "2017", event: "Şenol Güneş ile üst üste lig şampiyonluğu ve Şampiyonlar Ligi başarısı" },
      { year: "2021", event: "Sergen Yalçın ile Süper Lig şampiyonluğu" },
      { year: "2023", event: "Yeni stat Tüpraş Stadyumu dönemine başlandı" }
    ],
    tags: ["En Eski Kulüp", "16 Şampiyonluk", "1903"],
    category: "istanbul"
  },
  {
    id: 4,
    name: "Trabzonspor",
    shortName: "TS",
    city: "Trabzon",
    founded: 1967,
    stadium: "Papara Park",
    stadiumCapacity: "40.826",
    president: "Ertuğrul Doğan",
    colors: "Bordo & Mavi",
    league2026: 3,
    titles: { superLig: 8, turkiyeKupasi: 9, superKupa: 9, avrupa: 0 },
    excerpt: "Trabzonspor, İstanbul dışından şampiyonluk kazanan nadir kulüplerden biridir. Karadeniz'in gururunu temsil eder.",
    history: "Trabzonspor, 1967 yılında Trabzon'daki dört büyük kulübün birleşmesiyle kuruldu. Kuruluşundan yalnızca birkaç yıl sonra Türk futbolunun zirvesine çıkarak İstanbul dışından şampiyonluk kazanan ilk ve en başarılı takım unvanını aldı. Karadeniz'in coşkusunu ve sert oyun anlayışını yansıtan bordo-mavi ekip, taşralı Türk futbolunun simgesi haline geldi.",
    goldenEra: "1976-1984 yılları arasındaki dönem Trabzonspor'un altın çağıdır. Özkan Sümer yönetiminde Türkiye Ligi'nde 6 kez üst üste şampiyon olan takım, bu başarıyla Türk futbol tarihinin sayfalarına altın harflerle yazıldı. Şenol Güneş, Hami Mandıralı, Abdullah Ercan ve Tuğrul Demirel gibi efsane isimler bu dönemin oyuncularıydı.",
    currentStatus: "2025-2026 sezonunda 69 puanla 3. sırаda biten Trabzonspor, son yıllarda yeniden büyük güç haline geldi. 2022'de 8. lig şampiyonluğunu kazanan takım, Abdullah Avcı yönetiminde güçlü bir kadroyla mücadele etti.",
    legends: ["Şenol Güneş", "Hami Mandıralı", "Özkan Sümer", "Fatih Tekke", "Uğur Boral", "Burak Yılmaz"],
    timeline: [
      { year: "1967", event: "Dört yerel kulübün birleşmesiyle kuruldu" },
      { year: "1976", event: "İlk Türkiye Ligi şampiyonluğunu kazandı" },
      { year: "1984", event: "6. lig şampiyonluğu ile altın çağın sonu" },
      { year: "1992", event: "Türkiye Kupası'nı kazandı" },
      { year: "2010", event: "Burak Yılmaz ile Şampiyonlar Ligi macerasına başladı" },
      { year: "2022", event: "38 yıl sonra 8. lig şampiyonluğunu kazandı" },
      { year: "2026", event: "3. sırаda ligi bitirerek Avrupa'ya katıldı" }
    ],
    tags: ["Karadeniz", "8 Şampiyonluk", "Taşra Gururu"],
    category: "anadolu"
  },
  {
    id: 5,
    name: "İstanbul Başakşehir",
    shortName: "İBB",
    city: "İstanbul",
    founded: 1990,
    stadium: "Başakşehir Fatih Terim Stadyumu",
    stadiumCapacity: "17.319",
    president: "Göksel Gümüşdağ",
    colors: "Turuncu & Lacivert",
    league2026: 5,
    titles: { superLig: 1, turkiyeKupasi: 0, superKupa: 0, avrupa: 0 },
    excerpt: "Başakşehir, 2019-2020 sezonunda ilk kez Süper Lig şampiyonu olarak Türk futboluna sürpriz yaşattı.",
    history: "İstanbul Başakşehir FK, 1990 yılında İstanbul Büyükşehir Belediyespor adıyla kuruldu. Uzun yıllar alt liglerde mücadele eden kulüp, 2014'te Süper Lig'e yükseldi ve kısa sürede Türk futbolunun güçlü isimlerinden biri haline geldi. Göksel Gümüşdağ yönetiminde gerçekleştirilen çalışmalar, kulübü hem sahada hem de altyapı yatırımları açısından güçlendirdi.",
    goldenEra: "2019-2020 sezonu Başakşehir'in tarihi açısından dönüm noktasıdır. Edin Višćić yönetiminde büyük dört kulübü geride bırakarak ilk lig şampiyonluğunu kazanan Başakşehir, aynı sezon Şampiyonlar Ligi'nde gruplara katıldı. Demba Ba, Martin Škrtel ve Edin Džeko gibi tecrübeli yabancı oyuncuların yanı sıra yerli kadrosuyla dikkat çekici bir yapı oluşturdu.",
    currentStatus: "2025-2026 sezonunu 57 puanla 5. sırada tamamlayan Başakşehir, Avrupa Konferans Ligi'ne katılım hakkı kazandı. Emre Belözoğlu döneminde kadrosu yeniden şekillendirildi.",
    legends: ["Demba Ba", "Edin Džeko", "Martin Škrtel", "Robinho", "Arda Turan", "İrfan Can Kahveci"],
    timeline: [
      { year: "1990", event: "İstanbul Büyükşehir Belediyespor adıyla kuruldu" },
      { year: "2014", event: "Süper Lig'e yükseldi" },
      { year: "2017", event: "İlk kez şampiyonluk yarışına girdi" },
      { year: "2020", event: "Tarihi ilk Süper Lig şampiyonluğunu kazandı" },
      { year: "2020", event: "Şampiyonlar Ligi grup aşamasına katıldı" },
      { year: "2021", event: "Avrupa Ligi'nde mücadele etti" },
      { year: "2026", event: "5. sırayla Konferans Ligi'ne katılım hakkı kazandı" }
    ],
    tags: ["1 Şampiyonluk", "2020 Sürprizi", "Şampiyonlar Ligi"],
    category: "istanbul"
  },
  {
    id: 6,
    name: "Göztepe",
    shortName: "GZT",
    city: "İzmir",
    founded: 1925,
    stadium: "Gürsel Aksel Stadyumu",
    stadiumCapacity: "19.007",
    president: "Mehmet Sepil",
    colors: "Sarı & Kırmızı",
    league2026: 6,
    titles: { superLig: 0, turkiyeKupasi: 1, superKupa: 0, avrupa: 0 },
    excerpt: "Göztepe, İzmir'in en köklü kulübü olup 1925'ten bu yana Türk futboluna katkı sağlamaktadır.",
    history: "Göztepe Spor Kulübü, 1925 yılında İzmir'in Göztepe semtinde kuruldu. Ege şehrinin en köklü ve taraftar kitlesine sahip kulüplerinden biri olan Göztepe, tarihsel süreç içinde birçok kez Süper Lig ile alt ligler arasında gidip geldi. Sarı-kırmızı renkleri ve güçlü taraftar kültürüyle İzmir futbolunun sembolü haline geldi.",
    goldenEra: "1960'ların sonu ile 1970'lerin başı Göztepe'nin altın dönemidir. Bu dönemde İzmir kulübü Türkiye Kupası'nı kazandı ve Avrupa kupalarında temsil etme hakkı elde etti. Özellikle 1970'de Ferencváros'u yenerek Avrupa'da tarihi bir zafer kazandı.",
    currentStatus: "2025-2026 sezonunda 55 puanla 6. sırada biten Göztepe, Mehmet Sepil yönetiminde son yıllarda sürekli Süper Lig'de kalmayı başardı. İzmir'i Türk futbolunun üst seviyesinde temsil etmeye devam etmektedir.",
    legends: ["Okan Buruk", "Gürsel Aksel", "Osman Demirman", "İsmail Duman"],
    timeline: [
      { year: "1925", event: "İzmir'in Göztepe semtinde kuruldu" },
      { year: "1969", event: "Türkiye Kupası'nı kazandı" },
      { year: "1970", event: "Avrupa Kupa Galipleri Kupası'nda Ferencváros'u yendi" },
      { year: "1990", event: "Uzun bir süre alt liglerde mücadele" },
      { year: "2017", event: "Süper Lig'e yeniden yükseldi" },
      { year: "2022", event: "Süper Lig'de tutunma mücadelesi" },
      { year: "2026", event: "6. sırayla sezonunu tamamladı" }
    ],
    tags: ["1925", "İzmir", "Türkiye Kupası"],
    category: "ege"
  },
  {
    id: 7,
    name: "Samsunspor",
    shortName: "SS",
    city: "Samsun",
    founded: 1965,
    stadium: "Samsun 19 Mayıs Stadyumu",
    stadiumCapacity: "33.774",
    president: "Yüksel Yıldırım",
    colors: "Kırmızı & Beyaz",
    league2026: 7,
    titles: { superLig: 0, turkiyeKupasi: 0, superKupa: 0, avrupa: 0 },
    excerpt: "Samsunspor, Karadeniz'in ikinci büyük kulübü olarak Türk futboluna düzenli katkı sağlar.",
    history: "Samsunspor, 1965 yılında Karadeniz'in Samsun şehrinde kuruldu. Kırmızı-beyaz renkleriyle bilinen kulüp, Türk futbolunda köklü bir yere sahip olup Trabzonspor'dan sonra Karadeniz bölgesinin ikinci büyük kulübü sayılmaktadır. Tarihsel süreç içinde pek çok kez Süper Lig'de mücadele eden Samsunspor, geniş bir taraftar tabanına sahiptir.",
    goldenEra: "1980'li ve 1990'lı yıllarda Süper Lig'de düzenli olarak yer alan Samsunspor, bu dönemde sahaya sürdüğü kaliteli oyuncularla dikkat çekti. Tarihinin en istikrarlı süreçlerinden birini bu yıllarda yaşayan kulüp, o dönemde büyüklerle boy ölçüşebilen bir güce sahipti.",
    currentStatus: "2025-2026 sezonunda 51 puanla 7. sırada biten Samsunspor, uzun yıllar alt ligde kaldıktan sonra 2023'te Süper Lig'e döndü. Yüksel Yıldırım yönetiminde kalıcı olmayı hedeflemektedir.",
    legends: ["Hakan Ünsal", "İsmail Duman", "Mehmet Özdilek"],
    timeline: [
      { year: "1965", event: "Samsun'da kuruldu" },
      { year: "1975", event: "Süper Lig'de ilk büyük sezonlarını geçirdi" },
      { year: "1990", event: "Süper Lig'de en güçlü dönemini yaşadı" },
      { year: "2005", event: "Süper Lig'den düştü, uzun bir ayrılık başladı" },
      { year: "2022", event: "TFF 1. Lig'de şampiyonluk" },
      { year: "2023", event: "Süper Lig'e yeniden kavuştu" },
      { year: "2026", event: "7. sırayla sezonu tamamladı" }
    ],
    tags: ["Karadeniz", "1965", "Yeniden Yükseliş"],
    category: "anadolu"
  },
  {
    id: 8,
    name: "Rizespor",
    shortName: "RZS",
    city: "Rize",
    founded: 1953,
    stadium: "Çaykur Didi Stadyumu",
    stadiumCapacity: "14.990",
    president: "Hasan Kartal",
    colors: "Yeşil & Mavi",
    league2026: 8,
    titles: { superLig: 0, turkiyeKupasi: 0, superKupa: 0, avrupa: 0 },
    excerpt: "Çaykur Rizespor, çay şehri Rize'nin gururunu taşıyan ve Doğu Karadeniz'in en önemli kulübüdür.",
    history: "Çaykur Rizespor, 1953 yılında Karadeniz'in Rize şehrinde kuruldu. Çay şehriyle özdeşleşen kulüp, uzun yıllar alt liglerde mücadele etse de son on yılda Süper Lig'de tutunmayı başardı. Küçük bütçesine rağmen özgün oyun anlayışı ve yerel oyuncularına verdiği önemle dikkat çeken Rizespor, Türk futbolunun renkli sayfalarından birini oluşturmaktadır.",
    goldenEra: "2017-2019 döneminde Rizespor, Süper Lig'de gösterdiği performanslarla büyük kulüpleri dahi zorladı. Cesar Peixoto yönetiminde cesur futbol anlayışı benimsendi ve kulüp, bütçesinin çok üzerinde bir rekabet ortaya koydu.",
    currentStatus: "2025-2026 sezonunda 41 puanla 8. sırada biten Rizespor, Süper Lig'deki varlığını korumayı başardı. Genç ve dinamik kadrosuyla küme düşme hattından uzak durdu.",
    legends: ["Sercan Sararer", "Vedat Muriç", "Mehmet Cengiz"],
    timeline: [
      { year: "1953", event: "Rize'de kuruldu" },
      { year: "1980", event: "Süper Lig'e ilk yükseliş" },
      { year: "2013", event: "Süper Lig'e kalıcı olarak yükseldi" },
      { year: "2017", event: "Süper Lig'de en iyi sıralamasına ulaştı" },
      { year: "2020", event: "Düştü, 2021'de yeniden yükseldi" },
      { year: "2026", event: "8. sırayla sezonunu tamamladı" }
    ],
    tags: ["Çay Şehri", "Doğu Karadeniz", "1953"],
    category: "anadolu"
  },
  {
    id: 9,
    name: "Konyaspor",
    shortName: "KYS",
    city: "Konya",
    founded: 1922,
    stadium: "Konya Büyükşehir Stadyumu",
    stadiumCapacity: "42.512",
    president: "Ömer Korkmaz",
    colors: "Yeşil & Beyaz",
    league2026: 9,
    titles: { superLig: 0, turkiyeKupasi: 1, superKupa: 0, avrupa: 0 },
    excerpt: "Konyaspor, 1922'de kurulan ve Anadolu'nun kalbinde yer alan Konya'yı temsil eden köklü bir kulüptür.",
    history: "Konyaspor, 1922 yılında Türkiye'nin en büyük şehirlerinden biri olan Konya'da kuruldu. Yüzyıla yakın geçmişiyle Anadolu'nun en köklü kulüplerinden biri sayılan Konyaspor, tarihsel süreçte Süper Lig ile alt ligler arasında mekik dokudu. Yeşil-beyaz renkleriyle bilinen kulüp, Orta Anadolu'nun futbol merkezi haline geldi.",
    goldenEra: "2017 yılı Konyaspor için unutulmaz bir dönemdi. Türkiye Kupası'nı kazanarak kulüp tarihinin en büyük başarısına imza atan Konyaspor, aynı dönemde Süper Lig'de 2. sıraya kadar yükseldi. Aykut Kocaman yönetimindeki takım, üst sıralar için ciddi bir aday olduğunu kanıtladı.",
    currentStatus: "2025-2026 sezonunda 40 puanla 9. sırada biten Konyaspor, Süper Lig'deki varlığını sürdürdü. Ömer Korkmaz yönetiminde istikrarlı bir yapı oluşturulmaya çalışılmaktadır.",
    legends: ["Volkan Şen", "Junior Fernandes", "Aykut Kocaman"],
    timeline: [
      { year: "1922", event: "Konya'da kuruldu" },
      { year: "1979", event: "İlk kez Süper Lig'e yükseldi" },
      { year: "2010", event: "Süper Lig'de kalıcı olmaya başladı" },
      { year: "2017", event: "Türkiye Kupası şampiyonluğu ve Süper Lig'de 2. sıra" },
      { year: "2018", event: "Avrupa Ligi'nde ilk deneyimini yaşadı" },
      { year: "2026", event: "9. sırayla sezonu tamamladı" }
    ],
    tags: ["1922", "Anadolu", "Türkiye Kupası 2017"],
    category: "anadolu"
  },
  {
    id: 10,
    name: "Kocaelispor",
    shortName: "KCS",
    city: "Kocaeli",
    founded: 1966,
    stadium: "İzmit Stadyumu",
    stadiumCapacity: "35.000",
    president: "Engin Koyun",
    colors: "Yeşil & Beyaz",
    league2026: 10,
    titles: { superLig: 0, turkiyeKupasi: 1, superKupa: 0, avrupa: 0 },
    excerpt: "Kocaelispor, 1966'dan beri Marmara'nın sanayi şehri Kocaeli'ni temsil eden köklü bir kulüptür.",
    history: "Kocaelispor, 1966 yılında Marmara Bölgesi'nin önemli sanayi şehri Kocaeli'de (İzmit) kuruldu. Türk futbolunun tarihsel sürecinde önemli bir yere sahip olan Kocaelispor, özellikle 1990'larda Süper Lig'de üst sıralarda yer aldı ve Türkiye Kupası şampiyonluğu gibi tarihi başarılar elde etti. Yeşil-beyaz formasıyla Marmara'nın sanayi kenti futbolunu temsil etmektedir.",
    goldenEra: "1997 yılında Türkiye Kupası şampiyonu olan Kocaelispor, bu başarının ardından UEFA Kupası'nda mücadele etti. Tuncay Şanlı ve İlhan Mansız gibi yıldız oyuncuların yetiştiği kulüp, bu dönemde Türk futbolunun dikkat çekici isimlerinden biri oldu.",
    currentStatus: "2025-2026 sezonunda 37 puanla 10. sırada biten Kocaelispor, uzun yıllar alt liglerde kaldıktan sonra Süper Lig'e dönüşünü tamamladı ve sınıfını korudu.",
    legends: ["Tuncay Şanlı", "İlhan Mansız", "Mustafa Kaplan"],
    timeline: [
      { year: "1966", event: "Kocaeli'de kuruldu" },
      { year: "1994", event: "Süper Lig'de en iyi dönemini yaşadı" },
      { year: "1997", event: "Türkiye Kupası şampiyonu oldu" },
      { year: "1997", event: "UEFA Kupası'nda mücadele etti" },
      { year: "2002", event: "Süper Lig'den düştü" },
      { year: "2024", event: "Süper Lig'e geri döndü" },
      { year: "2026", event: "10. sırayla sezonu tamamladı" }
    ],
    tags: ["Marmara", "Türkiye Kupası 1997", "1966"],
    category: "marmara"
  },
  {
    id: 11,
    name: "Alanyaspor",
    shortName: "ALS",
    city: "Alanya",
    founded: 1948,
    stadium: "Bahçeşehir Okul Stadyumu",
    stadiumCapacity: "11.184",
    president: "Hasan Çavuşoğlu",
    colors: "Turuncu & Siyah",
    league2026: 11,
    titles: { superLig: 0, turkiyeKupasi: 0, superKupa: 0, avrupa: 0 },
    excerpt: "Alanyaspor, Akdeniz'in tatil cenneti Alanya'yı temsil eden modern ve dinamik bir kulüptür.",
    history: "Alanyaspor, 1948 yılında Akdeniz'in turizm merkezi Alanya'da kuruldu. Küçük bir tatil kasabasının kulübü olarak başlayan Alanyaspor, 2016 yılında Süper Lig'e çıkarak Türk futboluna sürpriz yaptı. Turuncu-siyah renklerinin simgelediği sıcak Akdeniz ruhuyla Süper Lig'de tutunmayı başaran kulüp, küçük bütçesine rağmen büyük kulüplerle yarışma başarısı gösterdi.",
    goldenEra: "2020-2022 dönemi Alanyaspor için altın yıllar oldu. Erol Bulut yönetiminde Süper Lig'de üst sıralarda yer alan kulüp, bazı haftalarda büyük dörtle puan farkı olmadan mücadele etti. Avrupa Konferans Ligi'ne katılım hakkı kazanması bu dönemin önemli bir başarısı oldu.",
    currentStatus: "2025-2026 sezonunda 37 puanla 11. sırada biten Alanyaspor, Süper Lig'deki yerini korudu. Hasan Çavuşoğlu yönetiminde sürdürülebilir bir futbol politikası izlenmektedir.",
    legends: ["Papiss Cissé", "Fernando", "Erol Bulut"],
    timeline: [
      { year: "1948", event: "Alanya'da kuruldu" },
      { year: "2000", event: "Profesyonel liglerde mücadeleye başladı" },
      { year: "2016", event: "Süper Lig'e ilk kez yükseldi" },
      { year: "2019", event: "Süper Lig'de kalıcı olmayı başardı" },
      { year: "2021", event: "Avrupa Konferans Ligi'ne katılım hakkı kazandı" },
      { year: "2026", event: "11. sırayla sezonu tamamladı" }
    ],
    tags: ["Akdeniz", "2016 Sürprizi", "Turizm Şehri"],
    category: "akdeniz"
  },
  {
    id: 12,
    name: "Gaziantep FK",
    shortName: "GFK",
    city: "Gaziantep",
    founded: 1969,
    stadium: "Kalyon Stadyumu",
    stadiumCapacity: "35.310",
    president: "Mehmet Büyükekşi",
    colors: "Kırmızı & Siyah",
    league2026: 12,
    titles: { superLig: 0, turkiyeKupasi: 0, superKupa: 0, avrupa: 0 },
    excerpt: "Gaziantep FK, Güneydoğu'nun gastronomi başkenti Gaziantep'i Süper Lig'de temsil eden kulüptür.",
    history: "Gaziantep FK, 1969 yılında Türkiye'nin güneydoğusundaki Gaziantep şehrinde kuruldu. Uzun yıllar alt liglerde mücadele eden kulüp, 2019'da Süper Lig'e yükseldi ve o tarihten bu yana üst ligdeki yerini korudu. Kırmızı-siyah renkleriyle bilinen Gaziantep FK, Güneydoğu Anadolu bölgesinin en güçlü futbol temsilcisi konumuna geldi.",
    goldenEra: "2019-2021 döneminde Süper Lig'e yükselen Gaziantep FK, Marius Sumudica yönetiminde altyapıdan gelen oyuncular ve akıllıca transfer politikasıyla dikkat çekti. Avrupa'dan getirilen hedefli transferler takımın kalitesini artırdı.",
    currentStatus: "2025-2026 sezonunda 37 puanla 12. sırada biten Gaziantep FK, Süper Lig'deki varlığını sürdürdü. Güneydoğu'nun futbol heyecanını stadına yansıtmaya devam etmektedir.",
    legends: ["Alexandru Ioniță", "Muhammet Demir", "Marius Sumudica"],
    timeline: [
      { year: "1969", event: "Gaziantep'te kuruldu" },
      { year: "2003", event: "Süper Lig'de ilk deneyim" },
      { year: "2019", event: "Süper Lig'e kalıcı olarak yükseldi" },
      { year: "2020", event: "Avrupa Ligi eleme turlarında mücadele" },
      { year: "2021", event: "Kalyon Stadyumu'na taşındı" },
      { year: "2026", event: "12. sırayla sezonu tamamladı" }
    ],
    tags: ["Güneydoğu", "Gastronomi Şehri", "1969"],
    category: "anadolu"
  },
  {
    id: 13,
    name: "Kasımpaşa",
    shortName: "KSP",
    city: "İstanbul",
    founded: 1921,
    stadium: "Recep Tayyip Erdoğan Stadyumu",
    stadiumCapacity: "14.258",
    president: "Mehmet Büyükekşi",
    colors: "Lacivert & Beyaz",
    league2026: 13,
    titles: { superLig: 0, turkiyeKupasi: 0, superKupa: 0, avrupa: 0 },
    excerpt: "Kasımpaşa, 1921 yılında İstanbul'un tarihi Kasımpaşa semtinde kurulan asil bir kulüptür.",
    history: "Kasımpaşa Spor Kulübü, 1921 yılında İstanbul'un tarihi ve kültürel açıdan zengin Kasımpaşa semtinde kuruldu. Yüzyılı aşkın geçmişiyle İstanbul'un en köklü kulüplerinden biri olan Kasımpaşa, uzun yıllar alt liglerde mücadele etse de son on yılda Süper Lig'de kendine sağlam bir yer edindi. Lacivert-beyaz renkleriyle bilinen kulüp, İstanbul'un Avrupa yakasını temsil etmektedir.",
    goldenEra: "2012-2016 döneminde Süper Lig'de üst sıralarda yer alan Kasımpaşa, Roberto Mancini gibi ünlü teknik direktörleri bünyesine katarak dikkatleri üzerine çekti. Bu dönemde elde edilen başarılar, kulübün tarihinin en iddialı sürecini oluşturdu.",
    currentStatus: "2025-2026 sezonunda 35 puanla 13. sırada biten Kasımpaşa, Süper Lig'deki yerini korudu. Tarihi semtine ve güçlü taraftar kültürüne sahip olmaya devam etmektedir.",
    legends: ["Enes Ünal", "Roberto Mancini", "Ömer Ali Şahiner"],
    timeline: [
      { year: "1921", event: "İstanbul Kasımpaşa'da kuruldu" },
      { year: "1970", event: "Süper Lig'e yükseldi" },
      { year: "2010", event: "Uzun aranın ardından Süper Lig'e döndü" },
      { year: "2013", event: "Roberto Mancini teknik direktör oldu" },
      { year: "2014", event: "Süper Lig'de en iyi sezonunu geçirdi" },
      { year: "2026", event: "13. sırayla sezonu tamamladı" }
    ],
    tags: ["1921", "İstanbul", "Mancini Dönemi"],
    category: "istanbul"
  },
  {
    id: 14,
    name: "Gençlerbirliği",
    shortName: "GNÇ",
    city: "Ankara",
    founded: 1923,
    stadium: "Eryaman Stadyumu",
    stadiumCapacity: "21.547",
    president: "İlhan Cavcav (merhum) – şimdiki yönetim",
    colors: "Kırmızı & Siyah",
    league2026: 14,
    titles: { superLig: 0, turkiyeKupasi: 2, superKupa: 0, avrupa: 0 },
    excerpt: "Gençlerbirliği, 1923'te kurulan ve Türkiye'nin başkenti Ankara'yı Süper Lig'de temsil eden köklü bir kulüptür.",
    history: "Gençlerbirliği Spor Kulübü, 1923 yılında Türkiye Cumhuriyeti'nin kuruluşuyla eş zamanlı olarak Ankara'da kuruldu. Cumhuriyetin başkentini temsil etme sorumluluğuyla yola çıkan kulüp, uzun yıllar Türk futbolunun önemli isimlerinden biri oldu. Kırmızı-siyah renkleri ve güçlü altyapı sistemiyle tanınan Gençlerbirliği, pek çok milli oyuncunun yetiştiği bir okul haline geldi.",
    goldenEra: "2010-2020 yılları arasında İlhan Cavcav yönetiminde Gençlerbirliği, Süper Lig'de sürekli yer aldı ve takım kendi bütçesiyle büyük başarılar elde etti. Süper Lig'de tutarlı performansı ve genç oyunculara verilen fırsatlarla dikkat çekti.",
    currentStatus: "2025-2026 sezonunda 34 puanla 14. sırada biten Gençlerbirliği, Süper Lig'deki zorlu savaşını sürdürdü. Ankara'nın başkenti temsil etme misyonunu taşımaktadır.",
    legends: ["Serdar Aziz", "İlhan Mansız", "Hasan Kaya", "İlhan Cavcav"],
    timeline: [
      { year: "1923", event: "Cumhuriyetin kuruluşuyla eş zamanlı Ankara'da kuruldu" },
      { year: "1973", event: "Türkiye Kupası'nı ilk kez kazandı" },
      { year: "1987", event: "İkinci Türkiye Kupası şampiyonluğu" },
      { year: "2000", event: "Süper Lig'de istikrarlı dönem başladı" },
      { year: "2021", event: "Süper Lig'den düştü" },
      { year: "2023", event: "TFF 1. Lig'den Süper Lig'e yükseldi" },
      { year: "2026", event: "14. sırayla sezonu tamamladı" }
    ],
    tags: ["Ankara", "Cumhuriyet Kulübü", "1923"],
    category: "ic-anadolu"
  },
  {
    id: 15,
    name: "Eyüpspor",
    shortName: "EYP",
    city: "İstanbul",
    founded: 1966,
    stadium: "Eyüp Stadyumu",
    stadiumCapacity: "16.000",
    president: "İrfan Karatay",
    colors: "Mavi & Sarı",
    league2026: 15,
    titles: { superLig: 0, turkiyeKupasi: 0, superKupa: 0, avrupa: 0 },
    excerpt: "Eyüpspor, İstanbul'un tarihi Eyüp ilçesinden gelen ve son yıllarda Süper Lig'e yükselen genç bir güç.",
    history: "Eyüpspor, 1966 yılında İstanbul'un tarihi Eyüp ilçesinde kuruldu. Hz. Eyüp el-Ensari türbesinin bulunduğu bu tarihi semtten adını alan kulüp, uzun yıllar Türk futbolunun alt liglerinde mücadele etti. 2023 yılında Süper Lig'e yükselerek büyük kulüplere kapı komşusu oldu. Mavi-sarı renkleriyle İstanbul'un Avrupa yakasının tarihi bölgesini temsil etmektedir.",
    goldenEra: "2022-2023 sezonu Eyüpspor için dönüm noktası oldu. TFF 1. Lig'de şampiyon olarak tarihinde ilk kez Süper Lig'e yükselen kulüp, İstanbul'un dört büyük kulübüyle aynı ligde oynamanın heyecanını yaşadı.",
    currentStatus: "2025-2026 sezonunda 33 puanla 15. sırada biten Eyüpspor, Süper Lig'deki ilk deneyim yıllarını geçiriyor. İstanbul'un tarihi dokusuna sahip bu kulübün geleceği oldukça umut verici görünmektedir.",
    legends: ["Emre Demir", "Recep Niyaz"],
    timeline: [
      { year: "1966", event: "İstanbul Eyüp'te kuruldu" },
      { year: "2010", event: "Alt liglerde uzun süre kaldı" },
      { year: "2022", event: "TFF 1. Lig'e yükseldi" },
      { year: "2023", event: "TFF 1. Lig şampiyonu, Süper Lig'e çıktı" },
      { year: "2024", event: "Süper Lig'de ilk sezonunu tamamladı" },
      { year: "2026", event: "15. sırayla sezonu tamamladı" }
    ],
    tags: ["Tarihi Eyüp", "Yükselen Güç", "2023 Süper Lig"],
    category: "istanbul"
  },
  {
    id: 16,
    name: "Antalyaspor",
    shortName: "ANT",
    city: "Antalya",
    founded: 1966,
    stadium: "Antalya Stadyumu",
    stadiumCapacity: "32.538",
    president: "Sinan Boztepe",
    colors: "Kırmızı & Beyaz",
    league2026: 16,
    titles: { superLig: 0, turkiyeKupasi: 1, superKupa: 0, avrupa: 0 },
    excerpt: "Antalyaspor, Türkiye'nin turizm başkenti Antalya'yı Süper Lig'de temsil eden akrep amblemli kulüptür.",
    history: "Antalyaspor, 1966 yılında Türkiye'nin turizm merkezi Antalya'da kuruldu. Akdeniz'in incisi olan bu güzel şehrin en büyük kulübü olarak tarihe geçen Antalyaspor, kırmızı-beyaz formalarıyla ve akrep amblemiyle tanınmaktadır. Tarihsel süreçte çeşitli yabancı yıldız oyuncuları kadrosuna katarak dikkat çekmiştir.",
    goldenEra: "1984 yılında Türkiye Kupası'nı kazanan Antalyaspor, bu başarının yanı sıra 2010'ların başında Fernando Torres gibi dünya yıldızlarını kadrosuna katarak tanınırlığını artırdı. Eto'o, Samir Nasri ve Robbie Keane gibi ünlü isimlerin Antalyaspor'da oynaması kulübü uluslararası platforma taşıdı.",
    currentStatus: "2025-2026 sezonunda 32 puanla 16. sırada biten Antalyaspor, küme düşme hattının üstünde kalmayı başardı. Sinan Boztepe yönetiminde yeniden yapılanma çalışmaları sürmektedir.",
    legends: ["Samuel Eto'o", "Samir Nasri", "Hasan Özer", "Bekir İrtegün"],
    timeline: [
      { year: "1966", event: "Antalya'da kuruldu" },
      { year: "1984", event: "Türkiye Kupası şampiyonu oldu" },
      { year: "2015", event: "Süper Lig'de yabancı yıldız transferleri dönemi" },
      { year: "2016", event: "Samuel Eto'o ve Samir Nasri gibi yıldızlar geldi" },
      { year: "2021", event: "Süper Lig'de kalıcı olmaya çalıştı" },
      { year: "2026", event: "16. sırayla sezonu tamamladı" }
    ],
    tags: ["Akdeniz", "Turizm Şehri", "Yabancı Yıldızlar"],
    category: "akdeniz"
  },
  {
    id: 17,
    name: "Kayserispor",
    shortName: "KSR",
    city: "Kayseri",
    founded: 1966,
    stadium: "Kadir Has Stadyumu",
    stadiumCapacity: "32.864",
    president: "Ali Çamlı",
    colors: "Sarı & Kırmızı",
    league2026: 17,
    titles: { superLig: 0, turkiyeKupasi: 1, superKupa: 0, avrupa: 0 },
    excerpt: "Kayserispor, Orta Anadolu'nun iş ve sanayi merkezi Kayseri'nin gururu ve en büyük futbol kulübüdür.",
    history: "Kayserispor, 1966 yılında Orta Anadolu'nun önemli şehirlerinden Kayseri'de kuruldu. Sarı-kırmızı renkleriyle bilinen kulüp, Türk futbolunun önemli aktörlerinden biri haline geldi. Kayseri'nin köklü ticaret ve sanayi geleneğini yansıtan kulüp, güçlü bir altyapı sistemi ve bölgeden yetişen yerel oyuncularıyla dikkat çekmektedir.",
    goldenEra: "2008 yılında Türkiye Kupası'nı kazanan Kayserispor, 2010'larda Süper Lig'de üst sıralara yükseldi. Trabzonspor ile yaptığı rekabetlerde öne çıkan ve Anadolu futbolunu temsil eden kulüp, Süper Lig'de Anadolu'nun sesi olmayı başardı.",
    currentStatus: "2025-2026 sezonunda 30 puanla 17. sırada biten Kayserispor, küme düşme tehlikesini atlatmayı başardı. Ali Çamlı yönetiminde yeniden yapılanma hedeflenmektedir.",
    legends: ["José Sosa", "Mehmet Topal", "Hakan Arıkan", "Murat Ceylan"],
    timeline: [
      { year: "1966", event: "Kayseri'de kuruldu" },
      { year: "1989", event: "Süper Lig'e yükseldi" },
      { year: "2000", event: "Süper Lig'de kalıcı olmaya başladı" },
      { year: "2008", event: "Türkiye Kupası şampiyonu oldu" },
      { year: "2011", event: "UEFA Avrupa Ligi'nde mücadele etti" },
      { year: "2021", event: "Süper Lig'den düştü, 2022'de yeniden yükseldi" },
      { year: "2026", event: "17. sırayla küme düşmeyi büyük farkla atlattı" }
    ],
    tags: ["Orta Anadolu", "Türkiye Kupası 2008", "1966"],
    category: "ic-anadolu"
  },
  {
    id: 18,
    name: "Fatih Karagümrük",
    shortName: "FKG",
    city: "İstanbul",
    founded: 1926,
    stadium: "Atatürk Olimpiyat Stadyumu",
    stadiumCapacity: "76.092",
    president: "Süleyman Hurma",
    colors: "Kırmızı & Siyah",
    league2026: 18,
    titles: { superLig: 0, turkiyeKupasi: 0, superKupa: 0, avrupa: 0 },
    excerpt: "Fatih Karagümrük, İstanbul'un tarihi Fatih ilçesinden gelen ve 1926'dan beri ayakta kalan köklü bir kulüptür.",
    history: "Fatih Karagümrük Spor Kulübü, 1926 yılında İstanbul'un tarihi Fatih ilçesinde kuruldu. İstanbul'un en köklü kulüplerinden biri olan Karagümrük, 94 yıllık aranın ardından 2020'de Süper Lig'e döndü. Tarihi surlarla çevrili Fatih'in ruhunu taşıyan bu kulüp, uzun beklemenin ardından üst ligde mücadele etmenin haklı gururunu yaşamaktadır.",
    goldenEra: "2020 yılında Süper Lig'e yükselmek, Karagümrük'ün modern tarihinin en büyük başarısıdır. Süleyman Hurma yönetiminde ve çeşitli yabancı teknik direktörlerle birlikte Süper Lig'de tutunmayı başaran kulüp, Andrea Pirlo'nun teknik direktör olarak görev yapmasıyla uluslararası kamuoyunun gündemine girdi.",
    currentStatus: "2025-2026 sezonunda 30 puanla 18. sırada biten Fatih Karagümrük, küme düşme tehlikesinin eşiğinde sonuçlandı. Gol farkı istatistikleri belirleyici olabilir. Tarihi Atatürk Olimpiyat Stadyumu'nu ev sahası olarak kullanan tek kulüptür.",
    legends: ["Andrea Pirlo (teknik direktör)", "Fabio Borini", "Mbaye Diagne", "Süleyman Hurma"],
    timeline: [
      { year: "1926", event: "İstanbul Fatih'te kuruldu" },
      { year: "1940", event: "İstanbul ligi döneminde aktif mücadele" },
      { year: "1959", event: "Türkiye Ligi'nin ilk yıllarında alt liglere düştü" },
      { year: "2020", event: "94 yıllık aranın ardından Süper Lig'e yükseldi" },
      { year: "2021", event: "Andrea Pirlo teknik direktör oldu – dünya gündemine girdi" },
      { year: "2022", event: "Süper Lig'deki ikinci sezonunda tutundu" },
      { year: "2026", event: "18. sırayla küme düşme tehlikesiyle sezonu kapattı" }
    ],
    tags: ["1926", "Pirlo", "Tarihi Dönüş"],
    category: "istanbul"
  }
];

// ─── STATE ───
let activeTeam = null;
let activeFilter = 'all';
let searchQuery = '';

// ─── RENDER TEAMS ───
function renderTeams() {
  const grid = document.getElementById('teamsGrid');
  const filtered = TEAMS.filter(t => {
    const matchFilter = activeFilter === 'all' || t.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || t.name.toLowerCase().includes(q) || t.city.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  const count = document.getElementById('teamCount');
  if (count) count.textContent = filtered.length + ' Takım';

  grid.innerHTML = filtered.map((t, i) => `
    <a class="team-card fade-in" href="#" data-id="${t.id}" style="animation-delay:${i * 0.04}s">
      <div class="team-card-accent"></div>
      <div class="team-rank">${String(t.league2026).padStart(2,'0')}</div>
      <div class="team-founded">Kuruluş ${t.founded}</div>
      <div class="team-name">${t.name}</div>
      <div class="team-city">📍 ${t.city} &nbsp;·&nbsp; ${t.stadium}</div>
      <div class="team-excerpt">${t.excerpt}</div>
      <div class="team-tags">
        ${t.tags.map(tag => `<span class="team-tag">${tag}</span>`).join('')}
      </div>
    </a>
  `).join('');

  // Re-attach events
  grid.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      openModal(parseInt(card.dataset.id));
    });
  });

  // Animate
  setTimeout(() => {
    grid.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }, 50);
}

// ─── MODAL ───
function openModal(id) {
  const t = TEAMS.find(t => t.id === id);
  if (!t) return;
  activeTeam = t;

  const modal = document.getElementById('modal');
  const overlay = document.getElementById('modalOverlay');

  modal.innerHTML = `
    <div class="modal-header">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="modal-tag">2025–2026 Süper Lig · ${t.league2026}. Sıra · ${t.city}</div>
      <div class="modal-title">${t.name}</div>
      <div class="modal-subtitle">${t.stadium} · Kapasite: ${t.stadiumCapacity} · Kuruluş: ${t.founded}</div>
    </div>
    <div class="modal-body">
      <div class="stat-row">
        <div class="stat-box"><div class="sv">${t.titles.superLig}</div><div class="sk">Süper Lig</div></div>
        <div class="stat-box"><div class="sv">${t.titles.turkiyeKupasi}</div><div class="sk">Türkiye Kupası</div></div>
        <div class="stat-box"><div class="sv">${t.titles.superKupa}</div><div class="sk">Süper Kupa</div></div>
      </div>

      <div class="modal-grid" style="margin-top:2rem;">
        <div>
          <div class="info-block">
            <h3>Tarihçe</h3>
            <p>${t.history}</p>
          </div>
          <div class="info-block">
            <h3>Altın Dönem</h3>
            <p>${t.goldenEra}</p>
          </div>
          <div class="info-block">
            <h3>Kulüp Bilgileri</h3>
            <ul>
              <li><span>Şehir</span> ${t.city}</li>
              <li><span>Kuruluş</span> ${t.founded}</li>
              <li><span>Stat</span> ${t.stadium}</li>
              <li><span>Kapasite</span> ${t.stadiumCapacity}</li>
              <li><span>Renkler</span> ${t.colors}</li>
              <li><span>Efsaneler</span> ${t.legends.slice(0,3).join(', ')}</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="info-block">
            <h3>Güncel Durum</h3>
            <p>${t.currentStatus}</p>
          </div>
          <div class="info-block">
            <h3>Tarihsel Zaman Çizelgesi</h3>
            <div class="timeline">
              ${t.timeline.map(item => `
                <div class="tl-item">
                  <div class="tl-year">${item.year}</div>
                  <div class="tl-dot"></div>
                  <div class="tl-text">${item.event}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  activeTeam = null;
}

// ─── FILTERS ───
document.querySelectorAll('.filter-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderTeams();
  });
});

// ─── SEARCH ───
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    renderTeams();
  });
}

// ─── KEYBOARD ───
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── OVERLAY CLICK ───
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// ─── SCROLL ANIMATIONS ───
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.05 });

// ─── BACK TO TOP ───
const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => {
  if (backTop) {
    backTop.classList.toggle('show', window.scrollY > 400);
  }
});

// ─── COUNTER ANIMATION ───
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start).toLocaleString();
    }
  }, 16);
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  renderTeams();

  // Counter animations
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
      }
    });
  });
  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
});
