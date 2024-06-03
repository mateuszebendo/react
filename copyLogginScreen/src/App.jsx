import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import Background from './components/Background/Background.jsx';
import gif from './assets/fundo.gif';
import backgroundImage from './assets/background.jpg';

export default function App() {
  const [url, setUrl] = useState(gif);

  function alteraAnimacao (){
    console.log(url);
    setUrl((prevUrl) => (prevUrl === gif ? backgroundImage : gif));
  }
  
  return (
    <>
    <Background url={url}/>
    <Header/>
    <Main />
    <Footer onClick={alteraAnimacao}/>
    </>
  );
}


