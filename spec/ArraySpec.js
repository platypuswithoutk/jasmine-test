describe('array tests', function() {
    let array = [1,2,3];
    it('odd elemnts should be remove from array', function() {
        let actual = xd(array);
        let mappedActual = actual.map(x => parseInt(x.slice(0,1))); 
        let expected = [1,3];
        expect(expected).toEqual(mappedActual)
    });

    it('abc shoud be added to remainig elements', function() {
        let actual = xd(array);
        let expected = ['1abc', '3abc'];
        expect(expected).toEqual(actual)
    });
})