describe('From Where Function', () => {
    it('should return corresponding registration name', () => {
        const response = fromWhere('CA')
        assert.equal(response, 'Cape Town')
    })
    // should be a string
    it('should be a string', () => {
        const response = fromWhere(10);
        assert.equal(response, "invalid input!")
    });
    it('should not be less than 2 or greater than 3', () => {
        const response = fromWhere('C');
        assert.equal(response, 'should not be less than 2 or greater than 3')
    });

})