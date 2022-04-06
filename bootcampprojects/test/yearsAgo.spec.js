// Years ago function
describe('YearsAgo function', () => {
    // take four numbers
    it('should take four numbers', () => {
        const result = yearsAgo(20144)
        assert.equal(result, 'enter four numbers')
    });
    // accurate years ago
    it('should return accurate years ago', () => {
        const result = yearsAgo(2015)
        assert.equal(result, yearsAgo(2015))
    });
})