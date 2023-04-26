import React, { useEffect, useState } from "react";
import Question from "../../UI/Question/Question";
import classes from "./Definition.module.css";
import Loading from "../../UI/Loading/Loading";

const questions = [
  {
    question: "Alfa-1 Antitripsin Enzimi Nedir?",
    answer:
      "Alfa-1 Antitripsin (A1AT) karaciğerde sentezlenen. 394 aminoasitten oluşan, 52 kDa olan bir akut faz glikoproteinidir. A1AT serin proteaz inhibitor ailesinin (SERPİN) bir üyesidir. A1AT geni 14q32.19 kromozom üzerinde kodlanmaktadır. A1AT enflamatuvar olaylarda açığa çıkar ve A1AT’nin akciğerdeki görevi alveoller interstisyel elastinin nötrofil elestaz tarafından yıkımını engellemektedir. Aslında, A1AT enzimini akciğerin iç yapısını koruyan bir enzim gibi düşünebiliriz.",
  },
  {
    question: "Alfa-1 Antitripsin Eksikliği Nedir?",
    answer:
      "Eksiklik durumuna A1AT geni üzerindeki mutasyonlar sebep olmaktadır. A1AT eksikliği akciğerleri savunmasız bırakmakta ve nötrofil elestaz tarafından kontrolsüz sindirimine neden olmaktadır. A1AT eksikliği solunum yolu hastalıklarını geliştirmektedir.Son yapılan çalışmalarda A1AT’nin 100’den fazla varyantı tespit edilmiştir. Bu varyantların, tek nokta mutasyonları sonucunda oluştuğu bilinmektedir. A1AT geni, genotipik olarak; normal allel (PİMM), taşıyıcı allel (PİMS, PİMZ) ve eksik allel (PİSS, PİSZ, PİZZ) olmak üzere 3 ana grupta incelenmektedir. En sık görülen allel PİMM allelidir ve sıklığı 0.95’tir. En sık görülen A1AT eksikliğine sebep olan varyant PİSS ve PİZZ allelleridir.",
  },
  {
    question:
      "Alfa-1 Antitripsin’in Mutasyon İlişkisi Nedir ve Olası Kullanılabilecek Yöntemler Nelerdir? ",
    answer:
      "Uygulamamızda modelimiz genlerin dışarıdan aşamalı mutasyona uğratılarak elde edilen veriler doğrultusunda eğitilecektir. İlk olarak diğer genlerin etkilenmemesi için PCR (Polymerase Chain Reaction) tekniği ile ilgili gen bölgelerini elde etme ve bu genleri UV ışınının dalga boyları arasındaki enerji farklılıklarını kullanarak ve her aşamada enerjiyi arttırarak genin dayanıklılığına bağlı genlerin genotip değerlerinin elde edilmesi ile veri kümesi oluşturulması düşünülmüştür.Ancak bu işlem sonucunda mutasyona değil degradasyona sebep olacağından elimizde ürün olmayacaktır. Bu sebeple mevcut çalışmalardan referans veri tabanlarına tanımlanmış mutasyonların in silico yöntemi ile analiz edilip bir algoritma geliştirilmesinin daha doğru, daha az maliyetli olacaktır",
  },
];


const Defitinion = (props) => {
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

  return !loading ? <div className={classes.container}>{questions.map((item, index)=> {
    return <Question key = {index} question = {item.question} answer = {item.answer}></Question>
  })}</div> : <Loading></Loading>


};

export default Defitinion;
