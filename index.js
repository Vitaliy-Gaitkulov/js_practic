'use strict';
// const count = 0;

// while(5 > count){
//     count++;

//     const userInput = prompt('Введите : ');

//     if(userInput === GOOD_PASSWORD){
//         break;
//     }
// }


// const a = +prompt("jljk");
// factorial(a);

// function factorial(usInput){
//     const num = usInput;
//     let numFactorial = 1;
//     let numCount = 1;

    
//     while(true){
//         numCount++;
//         numFactorial = numFactorial * numCount;

//         if(numCount >= num){
//             break;
//         }
//     }
//     console.log(numFactorial);
// }

const userInput = +prompt("Введите число");
const userInput2 = +prompt("Введите степень");
castomFunc(userInput, userInput2);

function castomFunc(usInput, usInput2){
    let count = 1;
    while(count <= usInput2){
        count++;
        usInput = usInput * usInput2;
    }
    console.log(usInput);
}