import React from "react";

import './Item.css'
const Item = props => {

  return (
    <li >
      <span>{props.title}</span>
      {props.children}
    </li>
  )
};

export default Item;
