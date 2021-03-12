import React from 'react';
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";
import store from "./store";
import {Provider} from "react-redux";


function App() {
  return (
      <Provider store={store}>
          <div className='grid-container'>
              <Header/>
              <Main/>
              <Footer/>
          </div>
      </Provider>
  );
}

export default App;
