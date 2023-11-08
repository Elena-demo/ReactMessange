import React from 'react';
import style from './UserInfo.module.css'

function UserInfo({currentUser}) {

  return (
    <div className={style.container}>
      <span className = {style.name}>{currentUser[0].name}</span>
      <p>{currentUser[0].time}</p>
    </div>
  );
}

export default UserInfo;