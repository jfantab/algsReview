const twoSum = (arr, target) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];
        const search = arr.indexOf(target - cur);
        if (search !== -1 && cur !== search) {
            result = [i, search];
            break;
        }
    }
    return result;
};

const arr = [2, 7, 11, 15];
const target = 22;
console.log(twoSum(arr, target));
