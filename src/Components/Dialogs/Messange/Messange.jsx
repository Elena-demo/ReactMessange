import React from 'react';
import style from './Messange.module.css'

function Messange(props) {

  return (
    <div className={style.container}>
      <img className={style.img} src = "./img/Chats/UserPhotoBlock.svg" alt = "user1"></img>
      <div className = {style.messange__box}>
      <p className = {style.text}>
        {props.text}
      </p>
      </div>

    </div>
  );
}

export default Messange;