let text = "Hello big world";
let x = 2;

function removeWords(text, x) {
    let arr = Array.from(text);
    let result = '';
    arr.forEach(element => {
        result += element;
        if (element == ' ' && x != 0) {
            result = '';
            x--;
        }
    });
    return result;
}

console.log(removeWords(text, x));