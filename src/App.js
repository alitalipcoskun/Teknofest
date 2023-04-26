
import "./App.css";
import Navbar from "./UI/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Info from "./Pages/Info/Info";
import Details from "./Pages/Details/Details";
import Main from "./Pages/Main/Main";
import Important from "./Pages/Important/Important";
import Defitinion from "./Pages/Definition/Definition";
import Loading from "./UI/Loading/Loading";


function App() {
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



    return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navbar></Navbar>} />
        <Route index element={<Main />} />
        <Route path="/hakkinda" element={!loading ? <Info></Info>: <Loading></Loading>} />
        <Route path="/nedir" element={!loading ? <Defitinion></Defitinion> : <Loading></Loading>} />
        <Route path="/calisma" element={!loading ? <Details></Details>: <Loading></Loading>} />
        <Route path="/onemli" element={!loading ? <Important></Important>: <Loading></Loading>} />
        <Route path="*" element={!loading ? <Main /> : <Loading></Loading>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
