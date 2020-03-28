import React from "react";
import { useDispatch } from "react-redux";
import {typeNumber} from '../../redux/actions/actions'

const doublyBtn = props => {
  const dispatch=useDispatch()
  
  const cls =
    props.type != undefined
      ? `button button-doubly button-${props.type}`
      : "button button-doubly";
  return (
    <div className={cls} onClick={()=>dispatch(typeNumber(props.value))}>
      <div className="text">
        <span>{props.value}</span>
      </div>
    </div>
  );
};

export default doublyBtn;
