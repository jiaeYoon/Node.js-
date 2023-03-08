console.log('require가 가장 위에 오지 않아도 됩니다.')

module.exports = '저를 찾아보세요.';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main === module);   // 현재 파일이 첫 모듈인지 알아봄
console.log(require.main.filename);     // 첫 모듈의 이름 알아보기