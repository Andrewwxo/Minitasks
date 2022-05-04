import React, {useLayoutEffect, useState} from 'react';
import './App.css';
import {NewComponent, topCars} from './Site/NewComponent';
import {Button} from './components/Button';
import {Money} from './components/Money';
import {FullInput} from './components/FullInput';
import {message} from 'antd';
import {Input} from './components/Input';
import {ButtonInput} from './components/ButtonInput';


function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }


    let [a, setA] = useState(0)

    const clickHandler = (num: number) => {
        setA(++a);
    }

    const clickHandlerNull = (num: number) => {
        setA(0);
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <>
            <NewComponent topCars={topCars}/>
            <Button name={'Number'} callBack={() => clickHandler(0)}/>
            <Button name={'0'} callBack={() => clickHandlerNull(0)}/>
            <h1>{a}</h1>
            <Money/>

            <Input setTitle={setTitle} title={title}/>
            <ButtonInput name={'+'} callBack={callBackButtonHandler}/>
            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((el, index) => {
                return (<div key={index}>
                    {el.message}
                </div>)
            })}

        </>
    )
        ;
}

export default App;
