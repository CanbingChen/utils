//寻找数组在另外数组中不同的元素,利用数组转换为集合进行处理，而不是使用indexOf
export const difference = (a,b) => {
  const set = new Set(b)
  return a.filter((x) => !set.has(x))
}
