// 6. 클래스
// 프로토타입 기반의 기존 코드
var Human = function(type) {
  this.type = type || 'human';
}

Human.isHuman = function(human) {
  return human instanceof Human;   //* instanceof : 해당하는 변수의 클래스와 비교해서 리턴해줌
};

Human.prototype.breath = function() {
  alert('h-a-a-a-m')
}

var Zero = function(type, firstName, lastName) {
  Human.apply(this, arguments);
  this.firstName = firstName;
  this.lastName = lastName;
}

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero;  // 상속하는 부분
Zero.prototype.sayName = function() {
  alert(this.firstName + ' ' + this.lastName)
};
var oldZero = new Zero('human', 'Zero', 'Cho');
console.log(Human.isHuman(oldZero))



// 클래스 기반 코드로 변경
class Human {
  constructor(type='human') {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human;
  }

  breath() {
    alert('h-a-a-a-m')
  }
}

class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breath();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero('human', 'Zero', 'Cho');
console.log(Human.isHuman(newZero))