'use client';

import React, { useState } from "react";
import { WebComponentWrapper } from "./helpers/WebComponentWrapper";
//import "./resistorWebComponent";

export function Index() {
    const [ color1, setColor1 ] = useState("red");
    const [ color2, setColor2 ] = useState("red");

    React.useEffect(() => {
        import("./resistorWebComponent")
    });

    return (

      <>
        <div id="color-selector-container">
          <select value={color1} onChange={(e) => {
            setColor1(e.target.value)
            }}>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="silver">Silver</option>
          </select>
          <select value={color2} onChange={(e) => {
            setColor2(e.target.value)
            }}>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="silver">Silver</option>
          </select>
        </div>
        <WebComponentWrapper
          wcTag={"resistor-component"}
          color1={color1}
          color2={color2}
        />
      </>
    )
}
