const reverse = (str) => {
    let start = 0,
        end = str.length - 1;

    str = str.split("");

    while (start <= end) {
        const temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
    return str.join("");
};

console.log(reverse("hello"));
