import React, {useLayoutEffect, useState} from 'react';
import './App.css';
import {Body} from './Site/Body';
import {Header} from './Site/Header';
import {Footer} from './Site/Footer';
import {NewComponent, topCars} from './Site/NewComponent';
import {Button} from './components/Button';
import {FilterType, Money} from './components/Money';


function App() {

    let[a,setA]=useState(0)

    const clickHandler = (num: number) => {
        setA(++a);
    }

    const clickHandlerNull = (num: number) => {
        setA(0);
    }

    return (
        <>
            <NewComponent topCars={topCars}/>
            <Button name={'Number'} callBack={()=>clickHandler(0)} />
            <Button name={'0'} callBack={()=>clickHandlerNull(0)} />
            <h1>{a}</h1>
            <Money />

        </>


    )
        ;
}

export default App;
