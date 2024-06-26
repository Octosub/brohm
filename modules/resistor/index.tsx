import React from "react";

export function Index() {
    React.useEffect(() => {
        import("./resistorWebComponent");
    });

    return (
        <resistor-component />
    )
}
