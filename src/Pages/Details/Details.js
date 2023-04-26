import React, { useEffect, useState } from "react";
import classes from "./Details.module.css";
import AlgoContainer from "../../UI/AlgoContainer/AlgoContainer";
import Loading from "../../UI/Loading/Loading";

const algorithm = [
  {
    text: "Kadın-Erkek popülasyonu oranı, bu iki popülasyonun ayrı ayrı sigara içme oranları, yaş ortalaması bu bireylerin başlangıçtaki A1AT enziminin genotipini gerçel istatistiklere dayanarak random (rastgele) bir şekilde üreten ve bunlara bağlı belli bir olasılık ile geni mutasyona uğratarak veri kümesi oluşturan bir program yazdık.",
  },
  {
    text: "Veri kümesindeki mutasyon verilerini uygun bir şekilde işledik. Bir çok input var, lakin biz tek output istediğimiz için ManyToOne mimarisine sahip deep bir model kullandık.",
  },
  {
    text: "Mutasyonlar birbiriyle bağlantılı olduğu için modeli oluşturmak için en uygun algoritma Deep RNN (Recurrent Neural Networks) algoritmalarıdır. RNN algoritmalarının mantığı bir önceki nöronun mevcut nöronu geri bildirimle beslemesidir.",
  },
  {
    text: "Bu problem üzerine LSTM (Long-Short Term Memory) algoritması geliştirildi.",
  },
  {
    text: "Lakin, RNN algoritması kullanımında büyük, uzun boyutlardaki verilerde ortaya Gradiant Vanishing problemi doğuyor.",
  },
  {
    text: "LSTMs algoritamlarında geleneksel RNN algoritmlarından farklı olarak hafıza hücreleri ile veriyi tutabiliyoruz ve bu sayede uzun dönemde efektif bir şekilde algoritma işelmini yapabiliyor ve geribildirimde nöronlar arası ağırlıkların aşırı düşmesine müsaade etmemiş oluyor. Yani bi nevi beynimizdeki hafıza hücrelerine benzetebiliriz.",
  },
  {
    text: "Aktivasyon fonksiyonları olarak Sigmoid Aktivasyon Fonksiyonu kullanılmıştır. Bunun sebebi elde etmek istediğimiz çıktıların regresyonik olmasında ve 0 ile 1 arası lineer olmayan değerler üretmesinden kaynaklı olmasıdır.",
  },
  {
    text: "Optimize edici olarak Adam kullanılmıştır çünkü diğerlerine göre daha az zamnda daha verimli bir şekilde eğitimi tamamlar.",
  },
  {
    text: "Kayıp Fonksiyonu olarak Mean Square Error fonskiyonunu kullandık. Regresyon problemi ile uğraştığımız için bu fonksiyon uygun görülmüştür.",
  },
  {
    text: "Genel kanı olarak 32 ve 64 batch sayısı en optimal değerler olarak görülüyor. Bu sebepten bizde modelimizde batch sayısı olarak 32’yi tercih ettik.",
  },
  {
    text: "Epoch sayısı olarak 7’yi tercih ettik çünkü 7’den  sonra model verileri ezberlemeye başlıyordu. Veri kümesinin büyüterek ve mutasyon sayısını arttırarak epoch sayısını arttırabiliriz diğer türlü modelimiz az öğrenecektir. Optimum değer deneme yanılma yoluyla bulunabilir.",
  },
  {
    text: "Bu boyutlardaki veri kümesi için tavsiye edilen dropout oranı 0.2-0.5’dir. Biz bu oranı 0.2 olarak tercih ettik.",
  },
];
const result = [
  {
    text: "İstediğimiz boyutta istediğimiz sayıda mutasyon oluşturan gerçekliğe olabildiğince yaklaştırdığımız veriyi oluşturan bir program yazdık.",
  },
  {
    text: "LSTM algoritması kullanarak oluşturduğumuz modeli bu veriler ile eğittik.",
  },
  {
    text: "Modelimizi tahmin için verdiğimiz test kümesi sonucu -3 ile +3 arasında değerler oluşturmuştur ve onları tersine özellik ölçeklendirmesi uygulayarak 0 ile 2 arasında değerler elde ettik. Okunabilirliği açısından verilerimizi 1 ile 99 arasında ölçeklendirdik.",
  },
  {
    text: "Sonuç veri kümemizi incelediğimizde değerlerimizin hemen hemen homojen bir şekilde dağıldığını gözlemleyebiliyoruz. Ek olarak, bireylerin mutasyonlar sonucu normal allel de oluşsa bireyin hasta olma ihtimalinin de var olduğunu gözlemleyebiliyoruz.",
  },
];

const Details = () => {
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
    <div className={classes.header}>
      <h2>MODEL VE ALGORİTMALAR</h2>
      <div className={classes.container}>
        {algorithm.map((item, index) => {
          return <AlgoContainer text={item.text} key={index}></AlgoContainer>;
        })}
      </div>
      <h2>SONUÇ</h2>
      <div className={classes.container}>
        {result.map((item, index) => {
          return <AlgoContainer text={item.text} key={index}></AlgoContainer>;
        })}
      </div>
    </div> : <Loading></Loading>
  );
};

export default Details;
