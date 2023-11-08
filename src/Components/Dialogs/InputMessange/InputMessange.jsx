import React, {useState} from 'react';
import style from './InputMessange.module.css'

function InputMessange(props) {  
  
  const textInput = React.createRef()

  const send = () =>{
    let value = textInput.current.value;
    props.addMessange(value)
    console.log(value);
    textInput.current.value = ''
  }

  return (
    <div className={style.container}>
      <input  placeholder='Input Messange' ref = {textInput}></input>
      <button onClick = {send}>SEND</button>
    </div>
  );
}

export default InputMessange;