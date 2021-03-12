import React from 'react';
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";
import store from "./store";
import {Provider} from "react-redux";


function App() {
  return (
    <div className='grid-container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
