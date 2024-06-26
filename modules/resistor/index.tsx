'use client';

import React from "react";
//import "./resistorWebComponent";

export function Index() {
    React.useEffect(() => {
        import("./resistorWebComponent")
    });

    return (
        <resistor-component />
    )
}
