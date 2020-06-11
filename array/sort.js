const list = [9, 8, 7, 6, 5, 63, 54]

const bubble = list => {
  const len = list.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        const value = list[j + 1]
        list[j + 1] = list[j]
        list[j] = value
      }
    }
  }
  console.log(list)
}

const insertSort = list => {
  const len = list.length
  for (let i = 1; i < len; i++) {
    const value = list[i]
    for (let j = i - 1; j >= 0; j--) {
      if (list[j] > value) {
        list[j + 1] = list[j]
      } else {
        break
      }
      list[j] = value
    }
  }
  console.log(list)
}

const pickSort = list => {
  let min
  const len = list.length
  for (let i = 0; i < len; i++) {
    const value = list[i]
    min = i
    for (let j = i + 1; j < len; j++) {
      if (list[j] < list[min]) {
        min = j
      }
    }
    const tem = list[min]
    list[min] = value
    list[i] = tem
  }
  console.log(list)
}



const quickSort = list => {
  const len = list.length
  const midIndex = Math.floor(len / 2)

  const midValue = list[midIndex]
  if (len < 2) return list
  const left = []
  const right = []
  for (let i = 0; i < len; i++) {
    if (i === midIndex) continue
    if (list[i] < midValue) {
      left.push(list[i])
    } else {
      right.push(list[i])
    }
  }
  return quickSort(left).concat(midValue, quickSort(right))
}

// bubble(list)
insertSort(list)
// pickSort(list)
// console.log(quickSort(list))
