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
    constructor(faculty, chair, name, surname, isMale, adress){
        super(faculty , chair);
        this.name = name;
        this.surname = surname;
        this.isMale = isMale;
        this.adress = adress;
    }

    set SetName(v){
        this.name = v;
    }

    get GetName(){
        return this.name;
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
    // for(let i = 0; i < array.length; i++){
    //     if(array[i]%2 === 0){
    //         console.log(array[i]);
    //     }
    // }

    // //3.3
    // for(const i of array){
    //     if(i%2 === 0){
    //         console.log(i);
    //     }
    // }

    //3.4
    array.forEach((element, index) => {
        if(element === 0){
            console.log(index);
        }
    });
    
    //3.5
    // let summNull = 0;
    // array.forEach(element => {
    //     if(element === 0){
    //         summNull++;
    //         console.log('summ 0 index: '+summNull)
    //         console.log(array.indexOf(element));
    //     }
    // });
}

initArray(arr);
