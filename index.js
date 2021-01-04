'use strict';
////    JS. practice

function getMinAndMaxNumbers() {
    const args1 = Array.from(arguments);
    const args2 = [...arguments];
    console.log(args1, args2);
    return [getMinValue(...arguments), getMaxValue(...arguments)];
  }
  
  function getMinValue() {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
  
  function getMaxValue() {
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }
