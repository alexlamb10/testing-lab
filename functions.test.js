const {returnTwo, add, greeting} = require('./function.js')

test("returnTwo should equal 2", () => {
    expect(returnTwo()).toBe(2)
})

test("greeting should return 'Hello, ' with the input name", () => {
    expect(greeting('James')).toBe("Hello, James.")
    expect(greeting('Jill')).toBe("Hello, Jill.")
})

test("Make sure that add finds the sum accurately", () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5,9)).toBe(14)
})