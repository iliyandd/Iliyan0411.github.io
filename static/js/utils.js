function getAlphabet() {
    const alpha = Array.from(Array(26)).map(function (e, i) {
        return i + 65;
    });
    return alpha.map(function (x) {
        return String.fromCharCode(x);
    });
}
