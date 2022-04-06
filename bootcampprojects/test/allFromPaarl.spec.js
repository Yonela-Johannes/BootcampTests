// Allpaarl function
describe('All From Paarl Function', () => {
    // Should return true if answer are right
    it('should return all that start with CJ', () => {
        const answer = allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864')
        assert.equal(answer, result)
    });
    // return false for anything other than string
    it('should return false if input not equal to string', () => {
        const answer = allPaarl(0)
        assert.equal(answer, false)
    })
})