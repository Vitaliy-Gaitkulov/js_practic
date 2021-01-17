class MyArray {

  constructor() {
    this.length = 0;
    for (const index of arguments) {
      this.push(index);
    }
  }

  push() {
    for (const index of arguments) {
      this[this.length] = index;
      ++this.length;
    }
    return this.length;
  }

  pop() {
    if (this.length <= 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }

  //не работает
  unshift(){
    let a = new MyArray();
    for (const index of arguments) {
      a.push(index);
    }
    let result = a.concat(this);

    return result.length;
  }

  shift(){
    if (this.length <= 0) {
      return;
    }
    const firstItem = this[0];
    delete this[0];

    for(let i = 0; i < this.length; i++){
      this[i] = this[i+1];
    }
    delete this[--this.length];
    return firstItem;
  }

  forEach(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  }

  map(cb) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(cb(this[i], i, this));
    }
    return result;
  }

  reverse() {
    const copy = new MyArray();
    for (let i = 0; i < this.length; i++) {
      copy.push(this[i]);
    }
    for (let i = 0; i < this.length; i++) {
      this[i] = copy.pop();
    }
  }

  concat(myArrayInstance) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < myArrayInstance.length; i++) {
      result.push(myArrayInstance[i]);
    }
    return result;
  }

  some(checkFunction) {
    for (let i = 0; i < this.length; i++) {
      if (checkFunction(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }

  every(checkFunc) {
    for (let i = 0; i < this.length; i++) {
      if (!checkFunc(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }

  filter(checkFunc) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      if (checkFunc(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  }

}


let arr = new MyArray(1,2,3,4,5,6,7);
// arr.shift();