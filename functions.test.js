const {returnTwo, add, greeting, multiply, divide, subtract} = require('./function.js')

test("returnTwo should equal 2", () => {
    expect(returnTwo()).toBe(2)
})

test("greeting should return 'Hello, ' with the input name", () => {
    expect(greeting('James')).toBe("Hello, James.")
    expect(greeting('Jill')).toBe("Hello, Jill.")
})



describe("Math functions", () => {
    test("Make sure that add finds the sum accurately", () => {
        expect(add(1, 2)).toBe(3)
        expect(add(5,9)).toBe(14)
    })
    
    test("Make sure that multiply finds the product accurately", () => {
        expect(multiply(1, 2)).toBe(2)
        expect(multiply(5,9)).toBe(45)
    })
    
    test("Make sure that divide finds the quotient accurately", () => {
        expect(divide(2, 1)).toBe(2)
        expect(divide(20, 5)).toBe(4)
    })
    
    test("Make sure that subtract finds the difference accurately", () => {
        expect(subtract(17, 12)).toBe(5)
        expect(subtract(88, 33)).toBe(55)
    })
})