class RangeValidator{
  constructor(from, to){
    this._from = from;
    this._to = to;
  }

  set setFrom(v){
    if(typeof v == 'number'){
      return this._from = v;
    }
    throw TypeError("Error type");
  }

  get getFrom(){
    return this._from;
  }

  set setTo(v){
    if(typeof v == 'number'){
      return this._to = v;
    }
    throw TypeError("неверный тип");
  }

  get getTo(){
    return this._to;
  }

  getRange(){
    let range = [this._from, this._to];
    return range;
  }

  validate(v){
    if(typeof v != 'number'){
      throw TypeError("неверный тип");
    }
    
    if(v >= this._from && v <= this._to){
      return `Число ${v} прошло валидацию`;
    }

    throw TypeError('Число не прошло валидацию');
  }
}