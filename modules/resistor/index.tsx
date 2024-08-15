'use client';

import { Band } from "@/components/atoms/band";
import { BandToggler } from "@/components/atoms/bandToggler";
import React, { useState } from "react";

export const Resistor = () => {
  const [ color1, setColor1 ] = useState("red");
  const [ color2, setColor2 ] = useState("red");
  const [ color3, setColor3 ] = useState("red");
  const [ color4, setColor4 ] = useState("red");
  const [ color5, setColor5 ] = useState("red");
  const [ isFiveBand, setIsFiveBand ] = useState(false);

  return(
    <>
      <div id="bands-box">
        <Band color={color1} setColor={setColor1}/>
        <Band color={color2} setColor={setColor2}/>
        <Band color={color3} setColor={setColor3}/>
        <Band color={color4} setColor={setColor4}/>
        {isFiveBand &&
          <Band color={color5} setColor={setColor5}/>
        }
      </div>
      <BandToggler isFiveBand={isFiveBand} setIsFiveBand={setIsFiveBand}/>
    </>
  )
}
