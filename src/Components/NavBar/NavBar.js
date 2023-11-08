import React from "react";
import style from "./NavBar.module.css";
import Profile from "./Profile/Profile";
import Menu from "./Menu/Menu";

function NavBar(props) {
  return (
    <div className={style.navbar}>
      {" "}
      <Profile name="Henry Jabba" img="./img/UserPhoto.png" />
      <Menu />
    </div>
  );
}

export default NavBar;
