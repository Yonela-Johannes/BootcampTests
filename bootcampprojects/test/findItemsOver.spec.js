//Find items over function
describe('Find Items Over', () => {
    // should return correct list
    it('should return items greater than given price', () => {
        let response = findItemsOver(itemList2, 15)
    });
    // should be an array
    it('should be an array', () => {
        const response = findItemsOver([], 15)
    })
    // limit should be a number
    it('should be a number; limit', () => {
        const response = findItemsOver(itemList2, 'Testing')
        assert.equal(response, 'your limit should a number')
    })
    // should not be empty
    it('should not be an emty string', () => {
        const response = findItemsOver('', 20)
        assert.equal(response, 'enter array!')
    })
});

