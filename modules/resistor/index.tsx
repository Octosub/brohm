'use client';

import React, { useState } from "react";
import { WebComponentWrapper } from "./helpers/WebComponentWrapper";
//import "./resistorWebComponent";

export function Index() {
    const [ color, setColor ] = useState("red");

    React.useEffect(() => {
        import("./resistorWebComponent")
    });

    return (

      <>
        <div id="color-selector-container">
          <select value={color} onChange={(e) => {
            setColor(e.target.value)
            }}>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="red">Red</option>
          </select>
        </div>
        <WebComponentWrapper
          wcTag={"resistor-component"}
          color={color}
        />
      </>
    )
}
