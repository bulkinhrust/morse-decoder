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

function decode(expr) {
    const stringLength = expr.length / 10;
    let result = '';

    const chunkSubstr = function (str, size) {
        const numChunks = Math.ceil(str.length / size);
        const chunks = new Array(numChunks);

        for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
          chunks[i] = str.substr(o, size);
        }

        return chunks;
    };

    for (i = 0; i < stringLength; ++i) {
        let letterCode = expr.substring(i * 10, i * 10 + 10);
        if (isNaN(letterCode)) {
            result += ' ';
            continue;
        }

        let morseResult = '';
        chunkSubstr(letterCode, 2).forEach((chunk) => {
            if (chunk === '10') {
                morseResult += '.';
            } else if (chunk === '11') {
              morseResult += '-';
            }
        });
        result += MORSE_TABLE[morseResult];
    }

    return result;
}

module.exports = {
    decode
};