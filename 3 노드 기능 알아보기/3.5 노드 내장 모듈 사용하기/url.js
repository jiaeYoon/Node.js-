const url = require('url');

const { URL } = url;
// URL 생성자에 주소를 넣어 객체로 만들면 주소가 부분별로 정리됨
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');

console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
