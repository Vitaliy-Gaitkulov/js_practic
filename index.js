'use strict';

function sumN(n){
    let i = 0;
    let sum = 0;
    while(i != n){
        i++;
        sum = sum + i;
    }
    return sum;
}

function sumRec(n){
    let sum = 0;
    const recurs = (n) =>{
        if(n==0){
            return;
        }
        sum += n;
        return recurs(n-1);
    }

    recurs(n);
    return sum;
}

class Faculty {
    constructor(faculty, chair){
        this.faculty = faculty;
        this.chair = chair;
    }
    set SetFaculty(v) {
        this.faculty = v; 
    }
    get GetFaculty(){
        return this.faculty;
    }

    set SetChair(v) {
        this.chair = v; 
    }
    get GetChair(){
        return this.chair;
    }

}

class Student extends Faculty{
    constructor(name, surname, isMale, adress, faculty, chair){
        super(faculty , chair);
        this._name = name;
        this._surname = surname;
        this._isMale = isMale;
        this._adress = adress;
    }

    set SetName(v){
        if(typeof v === "string"){
            this._name = v;
        }
    }

    get GetName(){
        return this._name;
    }

    info = ()=>{
        for(const [key, value] of Object.entries(this)){
            if(typeof value != 'function'){
                console.log(`${key}: ${value}`);
            }
        }
    }
}

const user = new Student('computer science', 'programming', 'Vitaliy', 'Gaitkulov', 'male', 'adress');




const arr = new Array();

function initArray(array){
    //3.1
    for(let i = 0; i < 250; i++){
        array.push(Math.round(Math.random()*50));
    }

    // //3.2
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 === 0){
            console.log(array[i]);
        }
    }

    // //3.3
    for(const i of array){
        if(i%2 === 0){
            console.log(i);
        }
    }

    //3.4
    array.forEach((element, index) => {
        if(element === 0){
            console.log(index);
        }
    });
    
    //3.5
    let summNull = 0;
    array.forEach(element => {
        if(element === 0){
            summNull++;
            console.log('summ 0 index : '+summNull)
            console.log(array.indexOf(element));
        }
    });
}

//4
class Book{
    constructor(author, title, yearOfPublication, publisher){
        this._author = author;
        this._title = title;
        this._yearOfPublication = yearOfPublication;
        this._publisher = publisher;
    }

    set SetAuthor(v){
        if(typeof v === "string"){
            this._author = v;
        }
    }

    get GetAuthor(){
        return this._author;
    }

    set SetTitle(v){
        if(typeof v === "string"){
            this._title = v;
        }
    }

    get GetTitle(){
        return this._title;
    }

    set SetYearOfPublication(v){
        if(typeof v === "number"){
            this._yearOfPublication = v;
        }
    }

    get GetYearOfPublication(){
        return this._yearOfPublication;
    }

    set SetPublisher(v){
        if(typeof v === "string"){
            this._publisher = v;
        }
    }

    get GetPublisher(){
        return this._publisher;
    }
}

class EBook extends Book{
    constructor(author, title, yearOfPublication, publisher, format, electronicNumber){
        super(author, title, yearOfPublication, publisher);
        this._format = format;
        this._electronicNumber = electronicNumber;
    }

    set SetFormat(v){
        if(typeof v === "string"){
            this._format = v;
        }
    }

    get GetFormat(){
        return this._format;
    }

    set SetElectronicNumber(v){
        if(typeof v === "string"){
            this._electronicNumber = v;
        }
    }

    get GetElectronicNumber(){
        return this._electronicNumber;
    }
}

//5
function fizzBuzz(n){
    for(let i = 0; i <= n; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log("fizzbuzz");
            continue;
        }else if(i%3 === 0){
            console.log("fizz");
            continue;
        }else if(i%5 === 0){
            console.log("buzz");
            continue;
        }else{
            console.log(i);
        }
    }
}
