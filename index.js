 isAdult();
 function isAdult(){
   const year = +prompt('Введите свой возраст');
   return year >= 18;
 }

 checkMultiplicity(25, 5);
 function checkMultiplicity(a, b){
   const a = a % b;
  return a === 0;
 }

triangle(5,5,9);
function triangle(a, b, c){
  return a + b > c && a + c > b && b + c > a;
}

romb(5,5);
function romb(a, b){
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