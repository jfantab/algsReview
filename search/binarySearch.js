const binarySearch = (arr, target, start, end) => {
    if (start >= end) return -1;

    const mid = start + Math.floor((end - start) / 2);

    if (target === arr[mid]) return mid;
    else if (target < arr[mid]) binarySearch(arr, target, start, mid);
    else if (target > arr[mid]) binarySearch(arr, target, mid + 1, end);
};

const binarySearchIterative = (arr, target, start, end) => {
    while (!(start >= end)) {
        const mid = start + Math.floor((end - start) / 2);
        if (target === arr[mid]) return mid;
        else if (target < arr[mid]) end = mid;
        else if (target > arr[mid]) start = mid + 1;
    }
    return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearchIterative(arr, 3, 0, 8));
//console.log(binarySearchIterative(arr, 29, 0, 8));
