import React from 'react';
import style from './Icons.module.css'

function Icons(props) {
  return (
    <div className= {style.content}>
      <img src ="./img/Dialogs/IconFile.svg"></img>
      <img src ="./img/Dialogs/IconMore.svg"></img>
    </div>
  );
}

export default Icons;