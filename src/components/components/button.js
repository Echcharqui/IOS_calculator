import React from 'react';
import { useDispatch } from "react-redux";
import {typeNumber} from '../../redux/reducers/reducer'

const button = (props) => {

    const dispatch=useDispatch()

    const cls=props.type!=undefined?`button ripple button-${props.type}`:'button ripple'
    return (
        <div className={cls} onClick={()=>dispatch(typeNumber(props.value))}>
            <div className="text">
                <span>{props.value}</span>
            </div>
        </div>
    );
}

export default button;
