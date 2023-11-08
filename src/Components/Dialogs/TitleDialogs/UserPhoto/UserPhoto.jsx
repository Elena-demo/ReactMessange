import React from 'react';
import style from './UserPhoto.module.css'

function UserPhoto({currentUser}) {

  return (
    <div className = {style.container}>
      <img src = {`${currentUser[0].photo}`} />
    </div>
  );
}

export default UserPhoto;