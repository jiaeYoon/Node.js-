const findAndSaveUser = async(Users) => {
  try {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' })
  } catch (error) {
    console.error(error)
  } 
}

// 순차적으로 프로미스 실행하기
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise)
  }
})();