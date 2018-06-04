//获取数组存在个数
//countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
export const countOccurrences = (arr,val) => {
  arr.reduce((a,v) => (v === val?a+1:a),0)
}
