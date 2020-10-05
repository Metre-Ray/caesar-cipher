const { encode, decode } = require('./caesar-cipher');
const fs = require('fs');

function processOutput(data, outputFile, action, shift) {
    const transformedData = applyAction(action, data.toString(), shift);
    if (!outputFile) {
        process.stdout.write(transformedData);
    } else {
        fs.access(outputFile, fs.constants.W_OK, (err) => { 
            if (err) {
                console.error('Output file doesn\'t exist or you don\'t have write access.'); 
            } else {
                fs.writeFile(outputFile, transformedData, (err) => {
                    if (err) {
                        return console.error(err.message);
                    }
                });
            }
        });
    }
}

function applyAction(action, text, shift) {
    switch(action) {
        case 'encode':
            return encode(text, shift);
        case 'decode':
            return decode(text, shift);
        default:
            console.error('Wrong action.');
    }
}

module.exports = processOutput;