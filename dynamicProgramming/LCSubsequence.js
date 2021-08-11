const find = (a, b, arr) => {
    let len = 0;

    len = a[0] === b[0] ? 1 : 0;

    for (let j = 0; j < b.length; j++) arr[0][j] = len;
    for (let j = 0; j < b.length; j++) arr[j][0] = len;

    for (let i = 1; i < a.length; i++) {
        for (let j = 1; j < b.length; j++) {
            if (a[i] === b[j]) {
                arr[i][j] = arr[i - 1][j - 1] + 1;
                len = Math.max(len, arr[i][j]);
            } else {
                arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
            }
        }
    }
    console.log(arr);
    return len;
};

const a = "qabwarytaaba";
const b = "zxabcabaayae";
const arr = Array.from({ length: a.length }, () =>
    Array.from({ length: b.length }, () => 0)
);

const a1 = "aabcaba";
const b1 = "abcaabc";
const arr1 = Array.from({ length: a1.length }, () =>
    Array.from({ length: b1.length }, () => 0)
);

const a2 = "abcmx";
const b2 = "azbxm";
const arr2 = Array.from({ length: a2.length }, () =>
    Array.from({ length: b2.length }, () => 0)
);

console.log("Max LCS ", find(a, b, arr));
//console.log("Max LCS: ", find(a1, b1, arr1));
//console.log("Max LCS: ", find(a2, b2, arr2));
