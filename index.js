class User{
  constructor(name, surname){
    this._name = name;
    this._surname = surname;
  }

  getFullName(){
    return `${this._name} ${this._surname}`;
  }
}

class Student extends User{
  constructor(name, surname, year){
    super(name, surname);
    this._year = year;
  }

  getCourse(){
    let currentYear = new Date();
    let course = currentYear.getFullYear() - this._year;
    if(course > 5){
      return `this user is not student`;
    }
    return course;
  }
}