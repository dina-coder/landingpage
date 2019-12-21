import React from 'react';
import './App.css';
import Header from './Header/Header';
import Content1 from './Content1/Content1';
import Speakers from './Speakers/Speakers';
import Schedule from './Schedule/Schedule';
import Auditorium from './Auditorium/Auditorium';
import Footer from './Footer/Footer';
import { Element  } from "react-scroll";

const App=()=> {
  return (
    <div>
      <Header />
      <Content1 />
      <Element name='speakers'>
      <Speakers />
        </Element>
      <Element name='schedule'>
      <Schedule />
        </Element>
        <Element name='auditorium'>
        <Auditorium />
        </Element>
      <Footer />
    </div>
  );
}

export default App;
