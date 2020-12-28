 isAdult();
 function isAdult(){
   const year = +prompt('Введите свой возраст');
   return console.log(year >= 18);
 }

 checkMultiplicity(25, 5);
 function checkMultiplicity(a, b){
   const x = a % b;
  return console.log(x === 0);
 }

triangle(5,5,9);
function triangle(a, b, c){
  return console.log(a + b > c && a + c > b && b + c > a);
}

rombArea(5,5);
function rombArea(a, b){
  const s = a*b;
  console.log("площадь ромба: "+ s);
}

cylinder(5,5);
function cylinder(a, b){
  const s = 2 * 3.14 * b * (a + b);
  console.log("площадь цилиндра: " + s);
}

triangleArea(5,5);
function triangleArea(a, b){
  const s = a * b * 0.5;
  console.log("площадь треугольника: " + s);
}

rectangleArea(5,5);
function rectangleArea(a, b){
  const s = a * b;
  console.log("площадь прямоугольника: " + s);
}