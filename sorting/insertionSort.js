const insertionSort = (arr) => {
    let index = 0
    for (let i = 1; i < arr.length; i++) {
        index = i
        while (arr[index] < arr[index - 1]) {
            let temp = arr[index - 1]
            arr[index - 1] = arr[index]
            arr[index] = temp
            index--
        }

    }
    return arr
};

console.log(insertionSort([5, 7, 1, 15, 2, 3, 12]))
console.log(insertionSort([6, 5, 4, 3, 2, 1]))