'use client';

import { Band } from "@/components/atoms/band";
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
      <Band color={color1} setColor={setColor1}/>
    </>
  )
}
