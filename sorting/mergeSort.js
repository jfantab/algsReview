//  O(n) time, O(n) space

const mergeSort = (arr, l, r) => {
  if (l >= r) return arr;
  const half = Math.floor((l + r) / 2);
  mergeSort(arr, l, half); //left subarray
  mergeSort(arr, half + 1, r); //right subarray
  console.log(combine(arr, l, r, half));
};

const combine = (arr, l, r, half) => {
  let lowHalf = [...arr.slice(l, half + 1)],
    highHalf = [...arr.slice(half + 1, r + 1)];
  let i = 0,
    j = 0,
    k = l;
  let lowHalfSize = lowHalf.length,
    highHalfSize = highHalf.length;

  while (i < lowHalfSize && j < highHalfSize)
    arr[k++] = lowHalf[i] <= highHalf[j] ? lowHalf[i++] : highHalf[j++];

  while (i < lowHalfSize) arr[k++] = lowHalf[i++];

  while (j < highHalfSize) arr[k++] = highHalf[j++];

  return arr;
};

mergeSort([64, 25, 12, 22, 11], 0, 4);
