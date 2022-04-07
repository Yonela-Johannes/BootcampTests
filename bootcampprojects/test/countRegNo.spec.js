// registration number function test
describe('Registration Number Function', () => {
    // Should return correct answer
    it('should return the length of the registration number', () => {
        const response = countRegNumber('CA 182736')
        assert.equal(response, 1)
    })
    // should accept string only 
    it('should only accept strings or alphanumeric', () => {
        const response = countRegNumber(20)
        assert.equal(response, "invalid input")
    })
})