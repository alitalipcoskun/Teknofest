import React, { useEffect, useState } from "react";
import Question from "../../UI/Question/Question";
import classes from "./Important.module.css";
import Loading from "../../UI/Loading/Loading";

const questions = [
  {
    question: "Neden bizim projemiz?",
    answer:
      "Bireyin genetik olarak KOAH hastalığına yakalanma oranını tahmin eden, ön teşhis eden dünya üzerindeki ilk yapay zeka modeli",
  },
  {
    question: "Proje tam olarak neyi hedefliyor?",
    answer:
      "Çalışma, bir değil birden çok hastalığı (KOAH, bronşit, astım, amfizem, karaciğer yetmezliği) ön teşhis etmemize olanak sağlıyor.",
  },
  {
    question: "Projemiz nasıl işliyor?",
    answer:
      "A1AT Eksikliği ve Yapay Zeka Teknolojilerinin birlikte ele alındığı ilk yerli ve milli çalışma.",
  },
  {
    question: "Neden KOAH hastalığı üzerine bu çalışmayı yürüttük?",
    answer:
      "KOAH, astım ve bronşit şu an en yaygın görülen hastalıklardan bir kaçıdır. Çalışmamız bu hastalıkların farkındalığını arttırmayı amaçlamakla beraber tedavi çalışmalarını geliştirebilmek için tasarlanmıştır.",
  },
];

const Important = () => {
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
      {questions.map((item, index) => {
        return <Question question= {item.question} answer = {item.answer} key = {index}></Question>
      })}
    </div>: <Loading></Loading>
  );
};

export default Important;
