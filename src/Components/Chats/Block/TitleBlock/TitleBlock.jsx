import React from 'react';
import style from './TitleBlock.module.css'

function TitleBlock(props) {
  return (
    <div className={style.container}>
      <div className = {style.user}>
        <img src ="./img/Chats/UserPhotoBlock.svg" ></img>
        <h5>Luy Robin</h5>
      </div>
      <div className={style.time}>time</div>
    </div>
  );
}

// export default TitleBlock;