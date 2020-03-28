import React from "react";
import Button from "./button";
import OpButton from './opButton'
import DoublyBtn from './doublyBtn'

const cleBoard = () => {
  return (
    <div className="cleBoard">
      <div className="row">
        <OpButton value="AC" type="gray" />
        <OpButton value="C" type="gray" />
        <OpButton value="%" type="gray" />
        <OpButton value="/" type="yellow" />
      </div>
      <div className="row">
        <Button value="7" type="darkGray" />
        <Button value="8" type="darkGray" />
        <Button value="9" type="darkGray" />
        <OpButton value="x" type="yellow" />
      </div>
      <div className="row">
        <Button value="4" type="darkGray" />
        <Button value="5" type="darkGray" />
        <Button value="6" type="darkGray" />
        <OpButton value="-" type="yellow" />
      </div>
      <div className="row">
        <Button value="1" type="darkGray" />
        <Button value="2" type="darkGray" />
        <Button value="3" type="darkGray" />
        <OpButton value="+" type="yellow" />
      </div>
      <div className="row">
        <DoublyBtn value="0" type="darkGray" />
        <Button value="," type="darkGray" />
        <OpButton value="=" type="yellow" />
      </div>
    </div>
  );
};

export default cleBoard;
