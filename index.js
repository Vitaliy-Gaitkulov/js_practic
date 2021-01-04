'use strict';
////    JS. practice


console.log(getMinAndMaxNumbers(4, -2, 5, 19, -130, 0, 10));
const arr = [12, 15, 20, 25, 59, 79];
console.log(average(arr));

function getMinAndMaxNumbers() {
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

  function average(a){
      let averg = 0;
      for(let i in a){
        averg += a[i];
      }
      return averg / a.length;
  }

  function getRandomArbitrary() {
    return Math.round(Math.random() * 100);
  }

  function setRandomArray(){
      let rand = [];
      for(let i = 0; i < 10; i++){
        rand[i] = getRandomArbitrary();
      }
      return rand;
  }