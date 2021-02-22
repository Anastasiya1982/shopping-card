import React from 'react';
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";


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
