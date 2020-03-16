import React from 'react';
import s from'./App.module.css';
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
        <div className={s.FirstPage}>
      <Header />
      <Content1 />
    </div>
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
