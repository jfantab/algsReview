const partition = (arr, l, r) => {
  if (l >= r) return 0;

  let lowHalf = [],
    highHalf = [];

  let pivot = arr[r];

  for (let i = l; i <= r; i++)
    arr[i] <= pivot ? lowHalf.push(arr[i]) : highHalf.push(arr[i]);

  let i, j;
  let pivotIndex = lowHalf.length === 0 ? 0 : lowHalf.length - 1;

  for (i = 0, j = l; j <= pivotIndex + l; j++) arr[j] = lowHalf[i++];
  for (i = 0; j <= r; j++) arr[j] = highHalf[i++];

  return pivotIndex;
};

const quickSort = (arr, l, r) => {
  if (r - l <= 1) return arr;

  let p = partition(arr, l, r);
  quickSort(arr, l, p - 1);
  quickSort(arr, p + 1, r);

  console.log("End of quickSort: ", arr);
};

quickSort([67, 89, 34, 50, 40], 0, 4);
quickSort([64, 25, 12, 22, 11], 0, 4);
