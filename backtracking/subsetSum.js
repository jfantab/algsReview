const subsetSum = (arr, target, nums, i = 0) => {
    if (target === 0) return 1;
    else if (target < 0) return 0;
    else if (i >= arr.length) return 0;
    else {
        console.log("Outside: ", target, arr[i], "\n");
        if (!subsetSum(arr, target - arr[i], nums, i + 1)) {
            return subsetSum(arr, target, nums, i + 2);
        } else {
            console.log("\nInside: ", target, arr[i], "\n");
            nums[i] = 1;
        }
    }
    return nums;
};

const arr = [1, 6, 7, 3, 8, 5];
const nums = Array.from({ length: arr.length }, () => 0);
const target = 13;
console.log(subsetSum(arr, target, nums));
