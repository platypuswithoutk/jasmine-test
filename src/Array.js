function xd(array) {
    return array.filter(x => x % 2 === 1)
                .map(x => x + 'abc');
}

