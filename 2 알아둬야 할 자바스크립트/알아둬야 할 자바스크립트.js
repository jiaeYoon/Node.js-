// 2. 템플릿 문자열
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
console.log(string1)

// ES2015 버전
const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`
console.log(string2)

// 3. 객체 리터럴
// 기존 코드(oldObject 객체에 동적으로 속성을 추가하고 있음)
var sayNode = function() {
  console.log('Node');
};
var es = 'ES';
var oldObject = {
  sayJS: function() {
    console.log('JS')
  },
  sayNode : sayNode,
}
oldObject[es+6] = 'Fantastic'
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6)

// 
const newObject = {
  sayJS() {
    console.log('JS')
  },
  sayNode,
  [es + 6] : 'Fantastic',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6)

// 4. 화살표 함수
function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
}

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
  return !x;
}

const not2 = (x) => !x;

console.log(add2(1, 2));
console.log(not2(1));

// this 바인드
var relationship1 = {
  name : 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function() {
    var that = this;
    this.friends.forEach(function(friend) {
      console.log(that.name, friend);
    });
  },
};
relationship1.logFriends();

const relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends() {
    this.friends.forEach(friend => {
      console.log(this.name, friend);
    });
  },
};
relationship2.logFriends();

// 5. 구조 분해 할당
/* 기존 코드
var candyMachine1 = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy: function() {
    this.status.count--;
    return this.status.count;
  },
};
var getCandy = candyMachine1.getCandy;
var count = candyMachine1.status.count;
*/

// 객체 구조 분해 할당
const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};
const { getCandy, status: { count } } = candyMachine;

// 배열 구조 분해 할당 기존 코드
var array1 = ['nodejs', {}, 10, true];
var node = array1[0];
var obj = array1[1];
var bool = array1[3];

// 배열 구조 분해 할당 코드
const array2 = ['nodejs', {}, 10, true];
const [node2, obj2, , bool2] = array2;
console.log(bool2)


// Map / Set
const m = new Map();

m.set('a', 'b');  // set(키, 값)으로 Map에 속성 추가
m.set(3, 'c');    // 문자열이 아닌 값을 키로 사용 가능
const d = {}; 
m.set(d, 'e');    // 객체도 된다

m.get(d);         // get(키)로 속성값 조회
console.log(m.get(d));

console.log(m.size) // size로 속성 개수 조회

for (const [k, v] of m) {   // 반복문에 바로 넣어 사용 가능
  console.log(k, v);
}

m.forEach((v, k) => {   // forEach도 사용 가능
  console.log(v, k);
})

console.log(m.has(d))   // has(키)로 속성 존재 여부를 확인함

m.delete(d);  // delete(키)로 속성을 삭제함
m.clear();    // clear()로 전부 제거함
console.log(m.size); //0

const s = new Set();
s.add(false); // add(요소)로 Set에 추가함
s.add(1);
s.add('1');
s.add(1); // 중복이므로 무시됨
s.add(2);

console.log(s.size);

console.log(s.has(1));

for (const a of s) {
  console.log(a);
}

s.forEach((a) => {
  console.log(a);
})

s.delete(2);
s.clear();

// 10. 널 병합/옵셔널 체이닝
const a = 0;
const b = a || 3
console.log(b)

const c = 0;
const d_ = c ?? 3;
console.log(d_);

const e = null;
const f = e ?? 3;
console.log(f);

const g = undefined;
const h = g ?? 3;
console.log(h);

// 옵셔널 체이닝 연산자
const a_ = {}
a.b;

const c_ = null;
try {
  c_.d;
} catch(e) {
  console.error(e);  // Cannot read properties of null (reading 'd')
}
c_?.d;

try {
  c_.f();
} catch(e) {
  console.error(e); //Cannot read properties of null (reading 'f')
}
c_?.f();

try {
  c_[0];
} catch(e) {
  console.error(e); // Cannot read properties of null (reading '0')
}
c_?.[0]