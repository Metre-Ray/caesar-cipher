function encode(text, shift) {
    text = text.trim();
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const num = text[i].charCodeAt();
        const newNum = num + parseInt(shift);
        if (num < 97 || num > 122) {
            result += text[i];
        } else if (newNum >= 97 && newNum <= 122) {
            result += String.fromCharCode(newNum);
        } else {
            result += String.fromCharCode(newNum % 122 + 96);
        }
    }
    return result;
}

function decode(text, shift) {
    text = text.trim();
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const num = text[i].charCodeAt();
        const newNum = num - parseInt(shift);
        if (num < 97 || num > 122) {
            result += text[i];
        } else if (newNum >= 97 && newNum <= 122) {
            result += String.fromCharCode(newNum);
        } else {
            result += String.fromCharCode(122 - (96 - newNum));
        }
    }
    return result;
}

module.exports = {
    encode,
    decode
}