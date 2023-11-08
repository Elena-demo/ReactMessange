import React from 'react';
import style from './Button.module.css'

function Button(props) {

  function newChat() {
    const nameChat = prompt('input name chat')
      console.log(nameChat);
      props.createChat('https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-retina-small', nameChat)
  }

  return (
    <div>
      <button className = {style.btn} onClick={newChat}> {props.text} </button>{" "}
    </div>
  );
}

export default Button;