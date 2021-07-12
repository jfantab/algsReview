//  O(1) space, O(n ^ 2) time

const mergeSortInPlace = (arr, l, r) => {
  if (l >= r) return arr;
  const mid = Math.floor((l + r) / 2);
  mergeSortInPlace(arr, l, mid); //left subarray
  mergeSortInPlace(arr, mid + 1, r); //right subarray
  console.log(combine(arr, l, r, mid));
};

const combine = (arr, l, r, mid) => {
  let j = mid + 1;
  let p1, p2;

  while (l <= mid && j <= r) {
    //  increment ahead of element in its proper position
    if (arr[l] <= arr[j]) l++;
    //  swap pairs of values
    for (p1 = l, p2 = j; p2 <= r && arr[p1] >= arr[p2]; p1++, p2++)
      swap(arr, p1, p2);
  }

  //  checking second half for elements out of position
  for (let i = mid + 1; i < r; i++)
    if (arr[i] >= arr[i + 1]) swap(arr, i, i + 1);

  return arr;
};

//function to swap two elements of an array in-place
const swap = (arr, p1, p2) => {
  let temp = arr[p1];
  arr[p1] = arr[p2];
  arr[p2] = temp;
};

mergeSortInPlace([64, 25, 12, 22, 11], 0, 4);
console.log("\n\n");
mergeSortInPlace([6, 74, 3, 50, 2], 0, 4);
console.log("\n\n");
mergeSortInPlace([45, 69, 22, 13, 56, 10], 0, 5);
console.log("\n\n");
