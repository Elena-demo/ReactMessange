import React from 'react';
import style from "./Profile.module.css"

function Profile(props) {
  return (
    <div className={style.container}>
      <img src = {props.img} alt = ""/>
      <div> {props.name}</div>
    </div>
  );
}

export default Profile;