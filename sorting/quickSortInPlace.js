const swap = (arr, p1, p2) => {
    const temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
};

const partition = (arr, l, r) => {
    if (l >= r) return 0;

    let pivotIndex = r,
        maxIndex = l;

    for (let i = l; i < pivotIndex; i++) {
        if (arr[i] <= arr[pivotIndex]) {
            swap(arr, i, maxIndex);
            maxIndex++;
        }
    }

    swap(arr, maxIndex, pivotIndex);

    console.log(arr);

    return maxIndex;
};

const quickSort = (arr, l, r) => {
    if (r - l <= 1) return arr;

    const p = partition(arr, l, r);
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, r);

    return arr;
};

const arr = [67, 89, 40, 50, 34];
console.log("Sorted: ", quickSort(arr, 0, arr.length - 1));

const arr1 = [11, 64, 22, 25, 23];
console.log("Sorted: ", quickSort(arr1, 0, arr1.length - 1));

const arr2 = [1, 3, 9, 8, 2, 7, 5];
console.log("Sorted: ", quickSort(arr2, 0, arr2.length - 1));
