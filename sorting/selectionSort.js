const selectionSort = (arr) => {
    let minIndex = 0
    for(let i = 0; i < arr.length; i++) {

        minIndex = i

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
};

console.log(selectionSort([64, 25, 12, 22, 11]))
console.log(selectionSort([6, 5, 4, 3, 2, 1]))