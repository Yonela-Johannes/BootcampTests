

describe('Weekday', () => {
    // Should return weekday as true
    it('should return weekday as true', () => {
        const result = isWeekday('Monday')
        assert.equal(result, true)
    });

    // empty input
    it('should return an error message for no input', () => {
        const result = isWeekday('')
        assert.equal(result, "Please enter weekday!")
    })
    // Weekend input
    it('should return false for saturday and sunday', () => {
        const result = isWeekday('Saturday')
        assert.equal(result, false)
    })

});