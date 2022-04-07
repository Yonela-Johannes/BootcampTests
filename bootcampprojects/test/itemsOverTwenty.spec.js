// Items over 20 test 
describe('Over Twenty Function', () => {
    // should return items over 20
    it('should return items over 20', () => {
        const response = findItemsOver(itemList, 20);
        assert.equal(response, [{ name: 'pears', qty: 37 },{ name: 'bananas', qty: 27 }])
    });

});