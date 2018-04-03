//判断数组是否排序
const isSorted = (arr) => {
  let isSorted = false
  if (arr.length<2) {
    isSorted = true
    return isSorted
  }
  for (let i = 1,len = arr.length;i<len-1;i++) {
    const disparity = (arr[i+1]-arr[i])*(arr[i]-arr[i-1])
    if (disparity<0) {
      isSorted = false
      break
    } else {
      isSorted = true
    }
  }
  return isSorted
}
console.log(isSorted([1,2,3,0]))
