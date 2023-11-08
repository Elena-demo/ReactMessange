import React from "react"
import style from "./Menu.module.css"
import { NavLink } from "react-router-dom";

function Menu(){
  return (
    <div className= {style.container}>
      <div className={style.item_menu}>
          <NavLink to='/Home'> 
          <img src = "./img/menu/Home.svg" alt = 'icon'></img>
          </NavLink>
      </div>
      <div className={style.item_menu}>
          <NavLink to='/Chat'> 
          <img src = "./img/menu/Chat.svg" alt = 'icon'></img>
          </NavLink>
      </div>
      <div className={style.item_menu}>
          <NavLink to='/Contact'> 
          <img src = "./img/menu/Contact.svg" alt = 'icon'></img>
          </NavLink>
      </div>
      <div className={style.item_menu}>
          <NavLink to='/Notifications'> 
          <img src = "./img/menu/Notifications.svg" alt = 'icon'></img>
          </NavLink>
      </div>
            <div className={style.item_menu}>
          <NavLink to='/Calendar'> 
          <img src = "./img/menu/Calendar.svg"></img>
          </NavLink>
      </div>
            <div className={style.item_menu}>
          <NavLink to='/Setings'> 
          <img src = "./img/menu/Setings.svg"></img>
          </NavLink>
      </div>
            <div className={style.logout}>
          <NavLink to='/LogOut'> 
          <img src = "./img/menu/LogOut.svg"></img>
          </NavLink>
      </div>      
         </div>

  )
}
 export default Menu;