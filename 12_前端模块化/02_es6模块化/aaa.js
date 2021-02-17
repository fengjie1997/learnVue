
  var obj = {}
  var name = '小明'
  var age = 22
  function sum(num1, num2) {
    return num1 + num2
  }
  var flag= true

  if (flag) {
    console.log(sum(10,20))
  }
  obj.flag = flag
  obj.sum = sum

  console.log(obj)
  // 导出方式1
  export {
    flag, sum
  }
  // 导出方式二
  export var num1 = 1
  export var height = 2

  // 导出函数/类
  export function mu1(num1 ,num2) {
    return num1 + num2
  }

  export class Person {
    run() {
      console.log('在奔跑')
    }
  }

  // export default 默认项，提供改名功能
  const address= '珠海'
  export default address
