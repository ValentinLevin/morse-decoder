const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decodeChar(encodedChar) {
    if (encodedChar !== '**********') {
        const values = {
            '00': '',
            '10': '.',
            '11': '-'
        };

        const partLength = 2;
        const partCount = Math.floor(encodedChar.length / partLength);

        let result = '';

        for (let partIndex = 0; partIndex < partCount; partIndex++) {
            let encodedPart = encodedChar.slice(partIndex * partLength, (partIndex + 1) * partLength);
            let partValue = values[encodedPart];
            result = result + partValue;
        }

        return MORSE_TABLE[result];
    } else {
        return ' ';
    }
}

function decode(expr) {
    const charCodeLength = 10;

    let result = "";
    let charCount = Math.floor(expr.length / charCodeLength);

    for (let charIndex = 0; charIndex < charCount; charIndex++) {
        let encodedChar = expr.slice(charIndex * charCodeLength, (charIndex+1) * charCodeLength);
        let char = decodeChar(encodedChar);
        result = result + char;
    }

    return result;
}

module.exports = {
    decode
}