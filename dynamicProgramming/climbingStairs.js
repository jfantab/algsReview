const findSteps = (n, arr) => {
    if (n <= 1) return arr[n];
    arr[n] = findSteps(n - 1, arr) + findSteps(n - 2, arr);
    return arr[n];
};

const findStepsIterative = (n, arr) => {
    let i = 0; //accumulator variable
    //base cases/starting values
    arr[0] = 1;
    arr[1] = 1;
    while (i < n) {
        arr[i] = arr[i - 1] + arr[i - 2]; //main crux of function
        i++;
    }
    return arr[n];
};

const n = 4;
const arr = Array.from({ length: n }, () => 0);

console.log(findSteps(n, arr));

console.log(findStepsIterative(n, arr));
