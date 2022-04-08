mocha.setup('bdd');
const assert = chai.assert;
const expect = chai.expect;
mocha.checkLeaks();
mocha.run();

describe("Greet", () => {
    // check if name is valid
    describe('enter valid name', () => {
        const result = greet('Yanga')
        it(`should return Hello Name, e.g ${result}`, () => {
            assert.equal('Hello Yanga', result)
        })
    });
    // check if name is a string
    it(`should be a string`, () => {
        const result = greet('Yonela')
        assert.equal(`Hello Yonela`, result)
    })
    // check if input is empty
    it(`should not be empty`, () => {
        const result = greet("Lukhanyo")
        assert.equal(`Hello Lukhanyo`, result)
    })
})