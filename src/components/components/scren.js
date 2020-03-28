import React from "react"
import { useSelector } from "react-redux"

const scren = () => {
  const RLTnumber = useSelector(state => state.currentNB)
  return (
    <div className="scren">
      <div className="operation">
        <p></p>
      </div>
      <div className="currentNB">
        <p>{RLTnumber}</p>
      </div>
    </div>
  );
};

export default scren;
