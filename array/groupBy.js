//数组分组
//groupBy([6.1, 4.2, 6.3], Math.floor);
//groupBy(['one', 'two', 'three'], 'length');
export const groupBy = (arr,att) => arr.map(typeof att === 'function'?att:(item) => item[att]).reduce((obj,val,i) => {
  obj[val] = (obj[val] || []).concat(arr[i])
  return obj
},{})

