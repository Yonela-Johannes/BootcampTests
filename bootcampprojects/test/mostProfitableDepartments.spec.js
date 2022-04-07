// Most Profitable Department Function
describe('Most Profitable Department Funtion', () => {
    // 
    it('should return the most protable day', () => {
        const response = mostProfitableDepartment(salesData)
        assert.equal(response, 'outdoor')
    })
    it('should return the most profitable department', () => {
        const response = mostProfitableDepartment(salesData2)
        assert.equal(response, 'electronics')
    })
})