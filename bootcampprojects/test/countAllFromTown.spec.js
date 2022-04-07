// Count all From Town test function
describe('Count All From Town Function', () => {
    // check if it's empty
    it('should not accept empty registration number input', () => {
        const response = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', '')
        assert.equal(response, "enter valid input!")
    });
    // Only works for strings
    it('should only take string as input data type', () => {
        const response = countAllFromTown(144)
        assert.equal(response, 'enter valid number plate!')
    });

});