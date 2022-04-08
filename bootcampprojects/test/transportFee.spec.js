// Transport Fee test function
describe('Transport Fee', () => {
    // should return correct answer
    it('should return R20 for morning', () => {
        const response = transportFee('morning')
        assert.equal(response, 'R20')
    });
    // should retturn correct answer
    it('should return R10 for afternoon', () => {
        const response = transportFee('afternoon')
        assert.equal(response, 'R10')
    })
    // should return corrent answer
    it('should be free for nightshift', () => {
        const response = transportFee('nightshift')
        assert.equal(response, 'free')
    });
    // invalid
    it('should return invalid for non-string data types', () => {
        const response = transportFee(50)
        assert.equal(response, 'invalid input!')
    })
})