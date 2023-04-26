import React, { useEffect, useState } from "react";
import classes from "./Info.module.css";
import Person from "../../UI/Person/Person";
import photoAli from "../../Assets/Photos/Ali.jpeg";
import photoBatu from "../../Assets/Photos/Batu.jpeg";
import photoEmre from "../../Assets/Photos/Emre.jpeg";
import Loading from "../../UI/Loading/Loading";

const persons = [
  {
    photo: photoBatu,
    name: "Batuhan EROĞLU",
    title: "Takım Kaptanı",
    info: "Ankara Universitesi Bilgisayar Mühendisliği (İngilizce) 2.sınıf öğrencisi. Yapay Zeka ve veri bilimi alanlarıyla, aynı zamanda biyoinformatik alanıyla da ilgileniyor ve çalışıyor. IEEE Ankara Universitesi Öğrenci Kolu Computer Society komitesinde 2022-2023 Dönemi Başkan Yardımcısı olarak görev alıyor. Ek olarak 100sCIub'ta kampüs temsilciği yapmaktadır. 21.yüzyıl yetkinliklerini içeren YetGen eğitim programından başarıyla mezun olmuştur. Hırslı, azimli ve görev bilinci olan bir karaktere sahiptir. Günlük hayatta kişisel gelişim ve finans gibi alanlarla da ilgilenmektedir. Genel olarak matematik ve ilgili şeylerle ilgilenmekten hoşlanıyor. İleride kendi girişimini kurmak ve onu büyütüp, markalaştırma gibi hedefleri bulunuyor. Ekipte takım kaptanlığı görevini üstleniyor ve projenin planlama, yönetme, araştırma yapma, fikir üretme ve geliştirme, rapor yazma ve takip etme, makine ve derin öğrenme algoritmaları ve verilerin hazırlanması kısmıyla ilgileniyor",
  },
  {
    photo: photoAli,
    name: "Ali Talip COŞKUN",
    title: "Takım Üyesi",
    info: "Ankara Üniversitesi Bilgisayar Mühendisliği 'İngilizce' ikinci sınıf öğrencisidir. Makine Öğrenmesi ve ağırlıklı olarak web geliştirme alanlarıyla ilgileniyor ve çalışmalarını yürütüyor. IEEE Ankara Üniversitesi Öğrenci Kolu Computer Society komitesinde 2022-2023 Dönemi Başkanı olarak görev alıyor. 21. Yüzyul yetkinliklerini içeren 'Yetkin Gençler' eğitim programından başarıyla mezun olmuştur. Basketbol oynamaktan ve yakın cumhuriyet tarihi ilgi alanlarıdır. Görev bilinci yüksektir. Ekipte takım üyesi olarak görev alıyor ve projenin araştırma yapma, rapor yazma, ihtiyaç ve malzeme tespiti yapma ve makine öğrenmesi algoritmaları kısmında görevler alıyor.",
  },
  {
    photo: photoEmre,
    name: "Prof. Dr. Emre KESKİN",
    title: "DANIŞMAN",
    info: "Ankara Üniversitesi Evrimsel Genetik Laboratuvarında (eGL) evrimsel genetikçi ve AB COST Aksiyonu DNAqua Net'in çalışma grubu liderlerinden birisidir. Lisans (Ziraat Mühendisliği/Su Ürünleri), Yüksek Lisans (Biyoteknoloji) ve Doktora (Biyoteknoloji) derecelerini Ankara Üniversitesi'nden almıştır. Doktorasını tamamladıktan sonra, birçok AB bilimsel ağına katıldı ve altın standart genomik araçları ve biyoçeşitlilik değerlendirmelerinde rutin uygulama için yeni eko-genomik indeksleri ve ölçümleri belirleme görevi ile çevresel DNA metabarkodlama kavramsal çerçevesinin geliştirilmesinde ve Avrupa su kütlelerinin biyoizlenmesi çalışmalarında kilit bir rol oynadı. Çalışmaları esas olarak, özellikle istilacı, nesli tükenmekte olan ve endemik türleri hedef alarak, sucul ekosistemlerin (e) DNA (meta)barkodlamasına odaklanmaktadır. Araştırma grubu, epigenetik, biyoinformatik ve metagenomik açıdan omurgalılar, omurgasızlar ve mikroorganizmalar üzerinde çalışmaktadır. Ulusal ve uluslararası toplantılarda 40'ın üzerinde yayınlanmış makalesi ve 100 1 den fazla sunumu ve bu sunumlardan 7 ödülü bulunmaktadır. Bugüne kadar ulusal ve uluslararası toplam 50 projede görev almış ve bu projelerin 121sinde proje lideri olarak bilimsel katkı sunmuştur Emre Keskin, çalışmaları sonucunda FSBI (British Islands Fisheries Association), COŞT (European Science and Technology Association) ve LİF (Innovation Leadership Foundation) tarafından uluslararası ödüllere layık görülmüştür. Kurduğu biyoteknoloji firmasının geliştirdiği yeni nesil eDNA Metabarkodlama Kiti, İngiliz Kraliyet Akademisi ve Newton Vakfı tarafından yapılan inovasyon projelerinin değerlendirilmesinde ödüle layık görülmüştür. Birleşmiş Milletler IPBES, International Barcode of Life ve IUCN olmak üzere 6 farklı uluslararası kuruluşun çeşitli komisyonlarının üyesidir. Emre Keskin, Balıkçılık Genetik Kaynakları Danışma Komisyonu, Balıkçılık Araştırma Programları DeğerIendirme Grubu ve Tarım ve Orman Bakanlığı Biyoçeşitlilik, Eğitim ve Yenilenebilir Enerji Çalışma Grubu üyesi olarak ulusal platformda da görevler almıştır.",
  },
];


const Info = () => {
  const [loading, setLoading] = useState(false);


  
  useEffect(() => {
    const loadingHandler = () => {
      setLoading(true);
      console.log("Called!");
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      console.log("Called!");
    }
    loadingHandler();
  }, []);
  return (!loading ? 
    <div className={classes.info}>
      {persons.map((item, index) => {
        return (
          <Person
            photo={item.photo}
            name={item.name}
            title={item.title}
            info={item.info}
            key={index}
          ></Person>
        );
      })}
    </div> : <Loading></Loading>
  );
};

export default Info;
