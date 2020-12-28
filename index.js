'use strict';

// Таски на циклы. Каждую задачу решить всеми тремя циклами!
// 1) Вывод чисел от 25 до 0 (порядок уменьшения)

let i = 25;
while(i>0){
    console.log(i);
    i--;
}

// 2) Вывод чисел от 10 до 50, которые кратны 5
let a = 10;
while(a <= 50){
    console.log(a);
    a +=5;
}
// 3)  Найти сумму чисел в пределах от 1 до 100.
let num1 = 22,num2 = 33;
while(true){
    if(num1, num2 <= 100 && num1, num2 >= 0){
        console.log(num1 + num2);
        break;
    }
    break;
}
// 4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

while(true){
    let userInput = +prompt('решить пример (2 + 2 * 2) :');
    if(userInput === 6){
        break;
    }
}