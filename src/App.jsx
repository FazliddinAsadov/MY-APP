import React from "react";
import Header from "./components/Header";
import HomHdinfo from "./layout/homHeader/HomHdinfo";
import Brand from "./layout/brandPart/Brand";
import Solution from "./layout/solution/Solution";
import Compaign from "./layout/myCompetion/Compaign";
import Servic from "./layout/services/Servic";
import BrandCarusel from "./layout/brandCarusel/BrandCarusel";
import Industry from "./layout/industry/Industry";
import Connected from "./layout/connect/Connected";
import Form from "./layout/form/Form";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <>
      <Header />
      <HomHdinfo />
      <Brand />
      <Solution />
      <Compaign />
      <Servic />
      <BrandCarusel />
      <Industry />
      <Connected />
      <Form />
      <Footer />
     
      
    </>
  );
};

export default App;
