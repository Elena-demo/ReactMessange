import React from 'react';
import UserPhoto from './UserPhoto/UserPhoto';
import UserInfo from './UserInfo/UserInfo';
import style from './TitleDioalogs.module.css'
import Icons from './Icons/Icons';

function TitleDioalogs({currentUser}) {
  return (
    <div className = {style.content}>
      <div className = {style.user__info}>
      <UserPhoto currentUser = {currentUser}/>
      <UserInfo currentUser = {currentUser}/>        
      </div>
      <Icons />
    </div>
  );
}

export default TitleDioalogs;