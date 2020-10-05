function encode(text, shift) {
    text = text.trim();
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const num = text[i].charCodeAt();
        const newNum = num + parseInt(shift);
        if (num >= 65 && num <= 90) {               // encode uppercase english characters
            if (newNum >= 65 && newNum <= 90) {
                result += String.fromCharCode(newNum);
            } else {
                result += String.fromCharCode(newNum % 90 + 64);
            } 
        } else if (num >= 97 && num <= 122) {       //encode lowercase english characters
            if (newNum >= 97 && newNum <= 122) {
                result += String.fromCharCode(newNum);
            } else {
                result += String.fromCharCode(newNum % 122 + 96);
            }
        } else {                                    // don't encode other characters
            result += text[i];
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
        if (num >= 65 && num <= 90) {               // decode uppercase english characters
            if (newNum >= 65 && newNum <= 90) {
                result += String.fromCharCode(newNum);
            } else {
                result += String.fromCharCode(90 - (64 - newNum));
            } 
        } else if (num >= 97 && num <= 122) {       //decode lowercase english characters
            if (newNum >= 97 && newNum <= 122) {
                result += String.fromCharCode(newNum);
            } else {
                result += String.fromCharCode(122 - (96 - newNum));
            }
        } else {                                    // don't decode other characters
            result += text[i];
        }
    }
    return result;
}

module.exports = {
    encode,
    decode
}