const partition = (arr, l, r) => {
    if (l >= r) return 0;

    let lowHalf = [],
        highHalf = [];

    let pivot = arr[r];

    //sorting elements into arrays
    //higher and lower than pivot
    //respctively
    for (let i = l; i <= r; i++)
        arr[i] <= pivot ? lowHalf.push(arr[i]) : highHalf.push(arr[i]);

    let i, j;
    //define length of lower half to be copied
    let pivotIndex = lowHalf.length === 0 ? 0 : lowHalf.length - 1;

    for (i = 0, j = l; j <= pivotIndex + l; j++) arr[j] = lowHalf[i++];
    for (i = 0; j <= r; j++) arr[j] = highHalf[i++];

    return pivotIndex;
};

const quickSort = (arr, l, r) => {
    if (r - l <= 1) return arr;

    const p = partition(arr, l, r);
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, r);

    return arr;
};

const arr = [67, 89, 34, 50, 40];
console.log("Sorted: ", quickSort(arr, 0, arr.length - 1));
const arr1 = [64, 25, 12, 22, 11];
console.log("Sorted: ", quickSort(arr1, 0, arr1.length - 1));
