const { encode, decode } = require('./caesar-cipher');

function processOutput(data, output, action, shift) {
    const transformedData = applyAction(action, data.toString(), shift);
    const outputFile = output;
    if (!output) {
        process.stdout.write(transformedData);
    } else {
        fs.writeFile(outputFile, transformedData, (err) => {
            if (err) {
                return console.log(err);
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
            console.err('Wrong action.');
    }
}

module.exports = processOutput;