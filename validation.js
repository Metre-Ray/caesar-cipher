function validate(shift, action) {
    if (shift === undefined || action === undefined) {
        console.error('shift and action are required');
        return false;
    }
    if (action !== 'encode' && action !== 'decode') {
        console.error('action should be \'encode\' or \'decode\'');
        return false;
    }
    if (shift < 0) {
        console.error('shift should be > 0');
        return false;
    }
    return true;
}

module.exports = validate;