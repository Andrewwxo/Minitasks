import React from 'react';
import './App.css';
import { Body } from './Site/Body';
import {Header} from './Site/Header';
import {Footer} from './Site/Footer';

function App() {
  return (
    <>
        <Header title={'Hi!'} />
        <Body titleForBody={'New Body'}/>
        <Footer titleForFooter={'New Footer'}/>

    </>
  );
}

export default App;
