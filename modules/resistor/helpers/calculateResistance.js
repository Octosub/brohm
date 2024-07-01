// colorCodeMapとcalculateResistance関数を定義する

// import { log } from "console";

const colorCodeMap = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    purple: 7,
    grey: 8,
    white: 9,
    gold: -1,
    silver: -2
  };
  
export function calculateResistance(color1, color2, color3, color4) {
    console.log(`called fuction${color1}`);
    const value1 = colorCodeMap[color1];
    const value2 = colorCodeMap[color2];
    const multiplier = Math.pow(10, colorCodeMap[color3]);
    const toleranceMap = {
      brown: 1,
      red: 2,
      green: 0.5,
      blue: 0.25,
      purple: 0.1,
      grey: 0.05,
      gold: 5,
      silver: 10
    };
    const tolerance = toleranceMap[color4] || 20;
  
    const resistanceValue = (value1 * 10 + value2) * multiplier;
    return { resistanceValue, tolerance };
  }
  