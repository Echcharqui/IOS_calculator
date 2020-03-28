import React from 'react';
import { useDispatch ,useSelector} from "react-redux";
import {setOperation} from '../../redux/reducers/reducer'


const button = (props) => {
    const RLTnumber = useSelector(state => state.currentNB);

    const dispatch=useDispatch()

    const cls=props.type!=undefined?`button ripple button-${props.type}`:'button ripple'
    return (
        <div className={cls} onClick={()=>{dispatch(setOperation(RLTnumber,props.value))}}>
            <div className="text">
                <span>{props.value}</span>
            </div>
        </div>
    );
}

export default button;
