// Registration Check Function
describe('Registration Check', () => {
    it('should return correct registration number', () => {
        const response = regCheck('FGT 123 MP', 'MP')
        assert.equal(response, true)
    });
    // should not be empty
    it('should not be empty', () => {
        const result = regCheck('')
        assert.equal(result, 'enter registration number!')
    })
    // should not numbers or any other characters
    it('should be alphanumeric only', () => {
        const result = regCheck(300)
        assert.equal(result, 'enter in alphanumerics')
    })
})