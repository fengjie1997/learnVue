import { flag,sum } from "./aaa.js";
import { height, num1 } from "./aaa.js";

if (flag) {
    console.log(sum(10,20))
  }
console.log(height ,num1)

// 统一的导入
import * as aaa from './aaa'

console.log(aaa.flag)