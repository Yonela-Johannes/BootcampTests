// Items over 20 test 
describe('Over Twenty', () => {
    // should return items over 20
    it('should return items over 20', () => {
        const response = findItemsOver20(itemList);
        expect(response).to.be.eq(itemsOver20Answer)
    });

    // string input
    it('should not accept string', () => {
        const response = findItemsOver20('This is a string!')
        assert.equal(response, "Input should be a list not a string")
    })
    // number input
    it('should not accept a number', () => {
        const response = findItemsOver20(20)
        assert.equal(response, 'Input should not be a number, enter list')
    })
});