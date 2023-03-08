// 7. 프로미스
const condition = true;
// const condition = false;  // 실패하는 경우
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  }
  else {
    reject('실패');
  }
});

// 다른 코드가 들어갈 수 있음
promise
  .then((message) => {
    console.log(message);   // 성공(resolve)한 경우 실행
  })
  .catch((error) => {
    console.error(error);   // 실패(reject)한 경우 실행
  })
  .finally(() => {  // 끝나고 무조건 실행
    console.log('무조건')
  });

// then이나 catch에서 다시 다른 then이나 catch를 붙일 수 있음
promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((error) => {
    console.error(error);
  });

// const promise1 = Promise.resolve('성공1');
// const promise2 = Promise.resolve('성공2');
// Promise.all([promise1, promise2])
//   .then((result) => {
//     console.log(result);
//   }).catch((err) => {
//     console.error(err)
//   });

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.reject('실패2');
const promise3 = Promise.resolve('성공3');
Promise.allSettled([promise1, promise2, promise3])
  .then((result) => {
    console.log(result)
  }).catch((err) => {
    console.error(err)
  });