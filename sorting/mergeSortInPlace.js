//  O(1) space, O(n ^ 2) time

const mergeSortInPlace = (arr, l, r) => {
    if (l >= r) return arr;
    const mid = Math.floor((l + r) / 2);
    mergeSortInPlace(arr, l, mid); //left subarray
    mergeSortInPlace(arr, mid + 1, r); //right subarray
    combine(arr, l, r, mid);
};

const combine = (arr, l, r, mid) => {
    let j = mid + 1;
    let p1, p2;

    //swapping/cycling elements into their proper positions
    while (l <= mid && j <= r) {
        //  increment ahead of element in its proper position
        if (arr[l] <= arr[j]) l++;
        //  swap pairs of values
        for (p1 = l, p2 = j; p2 <= r && arr[p1] >= arr[p2]; p1++, p2++)
            swap(arr, p1, p2);
        console.log(arr);
    }

    //  checking second half for elements out of position
    for (let i = mid + 1; i < r; i++)
        if (arr[i] >= arr[i + 1]) swap(arr, i, i + 1);
    console.log(arr);
};

//function to swap two elements of an array in-place
const swap = (arr, p1, p2) => {
    let temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
};

const arr1 = [64, 25, 12, 22, 11];
mergeSortInPlace(arr1, 0, arr1.length - 1);
console.log(arr1, "\n\n");
const arr2 = [6, 74, 3, 50, 2];
mergeSortInPlace(arr2, 0, arr2.length - 1);
console.log(arr2, "\n\n");
const arr3 = [45, 69, 22, 13, 56, 10];
mergeSortInPlace(arr3, 0, arr3.length - 1);
console.log(arr3, "\n\n");

const arr4 = [9, 3, 4, 8, 1, 2, 5, 10];
mergeSortInPlace(arr4, 0, arr4.length - 1);
console.log(arr4, "\n\n");
