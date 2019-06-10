/*
 * @Author: ccb(chencanbing@aliyun.com)
 * @Date: 2019-03-13 23:28:13
 * @Last Modified by: ccb(chencanbing@aliyun.com)
 * @Last Modified time: 2019-03-13 23:34:58
 * @Content:
 */
//取对象中不存在的值
export const omit = (obj,keys) => (Object.keys(obj).reduce((resetObj,key) => {
  if(keys.includes(key))return resetObj;
  return {
    ...resetObj,
    [key]:obj[key]
  }
},{}))

// var object = { 'a': 1, 'b': '2', 'c': 3 };
//output { b: '2' }

