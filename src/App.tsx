import React, {useState} from 'react';
import './App.css';
import {Body} from './Site/Body';
import {Header} from './Site/Header';
import {Footer} from './Site/Footer';
import {NewComponent} from './Site/NewComponent';

function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <NewComponent topCars={topCars} />
    );
}

export default App;
