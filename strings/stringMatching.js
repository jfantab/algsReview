const match = (text, target) => {
    let index = -1;
    let targetSize = target.length;
    for (let i in text)
        index = text.substring(i, i + targetSize).includes(target) ? i : index;

    return index;
};

/*
const match = (text, target) => {
    let index = -1;
    for (let i in text) {
        let charsMatched = 0;
        let j = 0;
        let k = i;

        while (text[k++] === target[j++]) charsMatched++;

        index = charsMatched === target.length ? i : index;
    }
    return index;
};
*/

const text = "The quick brown fox jumps over the lazy dog";
const target = "quick";

console.log(match(text, target));
