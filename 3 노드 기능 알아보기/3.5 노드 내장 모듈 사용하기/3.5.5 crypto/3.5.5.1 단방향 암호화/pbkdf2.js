const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt:', salt);
  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {  // sha512로 변환된 결괏값을 다시 sha512로 변환하는 과정을 10만번 반복함
    console.log('password', key.toString('base64'));
  });
});