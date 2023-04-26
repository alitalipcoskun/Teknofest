
import React, { useEffect, useState } from "react";
import Container from "../../UI/Container/Container";
import classes from "./Main.module.css";
import IntQuestion from "../../UI/Intro/IntQuestion";
import MainQuestion from "../../UI/MainQ/MainQ";
import Loading from "../../UI/Loading/Loading";

const question = [
  {
    question: "Biz Kimiz?",
    answer:
      "Takımımız 2022 yılında kurulmuş olup gerek üniversitemizde gerek ülkemizde 2 lisans öğrencisinin neler başarabileceğini göstermeyi, ülkemiz adına bir değer katmayı ve fakültemizde bir proje kültürü oluşturmayı hedefliyor. Takımımız 2 bilgisayar mühendisliği  lisans öğrencisinden oluşmaktadır. Takımımıza Ankara Üniversitesi Evrimsel Genetik Laboratuvarı'nda (eGL) evrimsel genetikçi ve AB COST Aksiyonu DNAqua-Net'in çalışma grubu liderlerinden biri olan Sayın Prof. Dr. Emre Keskin danışmanlık etmektedir. Takımımızın daha önce topluluklarda ve kurumlarda liderlik tecrübesi olan, ve hala sürdüren kişilerden oluştuğu için takım adı olarak Leaders of Anka'nın daha uygun olacağına karar verdik.",
  },
];
const questions = [
  {
    question: "Hedef Kitlemiz",
    answer: "Öncelikli olarak;Ailesinde daha önce solunum hastalıkları geçirmiş bireyler,Soy ağacında A1AT Eksikliği bulunan fertlere sahip olan bireyler,Yüksek miktarda toz, duman, gaz gibi solunum hastalıklarını tetikleyebilecek işte çalışan, çalışmış veya çalışacak bireyler.Günlük hayatta sigara içen veya içmiş bireyler.Akraba evliliği yapmış kişilerin çocukları.Günlük hayatta sürekli stres ile uğraşan bireyler.Sık sık sağlıksız, kirli beslenen bireyler.başta olmak üzere tüm herkes hedef kitlemizdir",
  },
  {
    question: "Problem Analizi ",
    answer: "TÜİK ve Sağlık Bakanlığı verilerine göre Dünyada ve Ülkemizde 3. ölüm nedeni konumunda olan Solunum Hastalıklarıdır. Bu ölümlerin yüzde 65.5’i KOAH yüzündendir. Bu da tüm ölümlerin yüzde 5.5’nin KOAH’nın sebebiyet verdiğini göstermektedir. KOAH görülme sıklığı yüzde 15 ile 20 arasındadır. Başka bir deyişle 5 kişiden 1’inde KOAH görülmektedir. Lakin 10 KOAH hastasından sadece 1’i bir doktora başvurup doğru teşhis alıyor. Eğer bu istatistikleri özetlersek 50 kişilik bir grubun 10’u KOAH hastası ve bu 10 kişinin sadece 1’i doktora başvurup doğru bir teşhis alıyor. Bu bağlamda bir bireyin KOAH hastalığına yakalanmasını ön teşhis etmek elzem konumdadır.",
  },
];

const about = [
  {
    text: "Projemiz,bir bireyin genetik olarak KOAH hastalığına yakalanma olasılığını tahmin eden, ve bu şekilde daha birey hastalığa yakalanmadan tedavi olmasına ve önlem almasına olanak sağlayan bir yapay zeka modelidir.",
  },
  {
    text: "Bu ön teşhis sayesinde bireyler daha hastalığa yakalanmadan önce hazırlıklı olma ve bireyin buna göre önceden tedavi olma imkanına sahip olacaklardır.",
  },
  {
    text: "Bu tahmini A1AT (Alfa1 Antitripsin) eksikliğinin genetik olarak incelenmesine bağlı olarak gerçekleştirmektedir.",
  },
  {
    text: "İncelemeyi A1AT enziminin genetiğinin yapay ve aşamalı olarak mutasyona uğratarak ve mutasyon sonucu bu enzimin genotiplerine ve genotiplerin anlamlarına bağlı olarak gerçekleştireceğiz. ",
  },
  {
    text: "Bireylerin A1AT’in enziminin aşamalı mutasyon uğratılmasına ve bu mutasyonlar sonucundaki A1AT enziminin genotipleri incelenecektir. Bu genotipler ve hasta ile ilgili bazı bilgilerle (cinsiyet, yaş, sigara içme vb.) beraber bir veri kümesi oluşturulacaktır. Deep RNN Neural Networks Algoritmaları doğrultusunda oluşturulacak model modele uygun getirilmiş veri kümesi ile eğitilecektir.",
  },
];

const Main = () => {
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
    <div className={classes.container}>
      {question.map((item, index) => {
        return <IntQuestion
        question={item.question}
        answer={item.answer}
        key = {index}
      ></IntQuestion>
      })}
      {questions.map((item, index) => {
        return <MainQuestion
        question={item.question}
        answer={item.answer}
        key = {index}
      ></MainQuestion>
      })}
      {about.map((item, index) => {
        return <Container text={item.text} key={index}></Container>;
      })}
    </div> : <Loading></Loading>
  );
};

export default Main;
