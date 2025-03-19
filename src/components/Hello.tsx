import React from "react";
import { Card, Button, DatePicker } from "antd";
import { useState } from 'react'

const Hello = (props) => {
  //we expect props to have a property called name
  const greeting = `Hello ${props.name}`;
  const [txtColor, setColor] = useState("blue");

  const changeColor = () => setColor((txtColor) => txtColor === "blue" ? txtColor = "red" : txtColor = "blue");

  return (
    <>
      <Button type="primary" onClick={() => console.log(props)}>
        show props
      </Button>
      <Button type="primary" onClick={changeColor}>
        Change text color
      </Button>
      <h1 style={{color: txtColor}}>{greeting}</h1>;
    </>
  );
};
export default Hello;
