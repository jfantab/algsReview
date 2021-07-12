const bubbleSort = (arr) => {
    let size = arr.length
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }

        }
    }
    return arr
};

console.log(bubbleSort([5, 7, 1, 15, 2, 3, 12]))