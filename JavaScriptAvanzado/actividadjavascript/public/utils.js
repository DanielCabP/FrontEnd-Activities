let counter = 0;

function genId() {
    return counter++;
}

module.exports = genId;
