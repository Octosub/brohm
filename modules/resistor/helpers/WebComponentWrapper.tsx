import { createElement, useRef, useLayoutEffect, memo } from "react";

const _WebComponentWrapper = (props) => {
  const { wcTag, children, ...restProps } = props;
  const wcRef = useRef(null);

  useLayoutEffect(() => {
    const wc = wcRef.current;

    for (const [key, value] of Object.entries(restProps)) {
      console.log(`Checking key ${key} in wc`)
      if (key in wc) {
        console.log(`Setting property ${key} to ${value}`)
        if (wc[key] !== value) {
          wc[key] = value;
        }
      } else {
        console.log(`Setting attribute ${key} to ${value}`)
        if (wc.getAttribute(key) !== value) {
          wc.setAttribute(key, value);
        }
      }
    }
  });
  return createElement(wcTag, {ref: wcRef});
};

export const WebComponentWrapper = memo(_WebComponentWrapper);
