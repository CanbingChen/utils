//数组铺开
//递归判断每项是否为数组
export const deepFlatten = (arr) => [].concat(...arr.map((v) => (Array.isArray(v)?deepFlatten(v):v)))
