import React from "react";
import style from "./Block.module.css"
import TitleBlock from "./TitleBlock/TitleBlock";
import { NavLink } from "react-router-dom";

function Block(props){
  return(
    <li className={style.container}>
      <NavLink to = {props.id} className = {({isActive}) =>(isActive ? 'activelink' : null)}>
      <div className={style.title}>
          <div className = {style.user}>
            <img className = {style.img} src ={props.photo} ></img>
            <h5 className = {style.name}>{props.name}</h5>
          </div>
        <p className={style.time}>{props.time}</p>
      </div>
      <div> 
        <p className={style.text}>{props.text} </p>
      </div>

      </NavLink>
    </li>
  )
}

export default Block;
