import range from '../range'

test('range should validate correct value', () => {
    // Arrange
    let validate = range(null, 0, 10);

    // Act
    let result = validate(5);

    // Assert
    expect(result.isValid).toBe(true);
});

test('range should validate incorrect value', () => {
    // Arrange
    let validate = range(null, 0, 10);

    // Act
    let result = validate(15);

    // Assert
    expect(result.isValid).toBe(false);
});

test('range should return the provided error message', () => {
    // Arrange
    let expectedMessage = 'expected message';
    let validate = range(expectedMessage, 0, 10);

    // Act
    let result = validate(15);

    // Assert
    expect(result.error).toBe(expectedMessage);
});

test('range throw if the value is a letter', () => {

    let validate = range(null, 0, 10);

    expect(() => validate('a')).toThrow(Error);
});
