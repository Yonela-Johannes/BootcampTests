// Total Phone Bill Test Function
describe("Total Phone Bill", () => {
    // invalid input
    it("should not be empty", () => {
        const result = totalPhoneBill('')
        assert.equal(result, 'invalid input!')
    });
    // should be a number
    it('should be a number', () => {
        const result = totalPhoneBill(70)
        assert.equal(result, true)
    });
    // should be a float
    it('should be a float', () => {
        const result = totalPhoneBill(1.99)
        assert.equal(result, true)
    });
    it('should not be letters', () => {
        const result = totalPhoneBill('Yonela')
        assert.equal(result, 'not a valid input!')
    })
})