import React from 'react';
import style from "./Search.module.css"

function Search({setSearh}) {

  return (
    <div>
      <input className= {style.input} placeholder='Search' onChange={(ev)=>{setSearh(ev.target.value)}}/>
    </div>
  );
}

export default Search;
