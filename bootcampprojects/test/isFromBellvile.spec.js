// isFromBelvilve function
describe('Is From Bellville Function', () => {
    // Should return true if answer are right
    it('should return all that start with CY', () => {
        const answer = isFromBellville('CY 900, CY 678 543, CY 34567, CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864')
        assert.equal(answer, bellville)
    });
    // return false for anything other than string
    it('should return false if input not equal to string', () => {
        const answer = isFromBellville(0)
        assert.equal(answer, false)
    })
})