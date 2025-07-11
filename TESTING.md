# Unit Testing Guide

This section demonstrates comprehensive unit testing practices for JavaScript applications using Jest.

## 📁 Project Structure

```
src/
├── index.js          # Main entry point
├── math.js           # Mathematical utility functions
├── string.js         # String manipulation utilities
└── array.js          # Array processing utilities

test/
├── index.test.js     # Tests for main module
├── math.test.js      # Tests for math utilities
├── string.test.js    # Tests for string utilities
└── array.test.js     # Tests for array utilities
```

## 🧪 Testing Framework

This project uses **Jest** as the testing framework with the following configuration:

- **Test Environment**: Node.js
- **Coverage Reports**: Text, LCOV, and HTML formats
- **Test Pattern**: `**/test/**/*.test.js`

## 📊 Test Coverage

Our test suite achieves **100% code coverage** across all metrics:

- **Statements**: 100%
- **Branches**: 100%
- **Functions**: 100%
- **Lines**: 100%

## 🚀 Running Tests

### Basic Test Execution
```bash
npm test
```

### Watch Mode (for development)
```bash
npm run test:watch
```

### Coverage Report
```bash
npm run test:coverage
```

## 🎯 Testing Best Practices

### 1. **Comprehensive Test Cases**
Each function is tested with multiple scenarios:
- Happy path scenarios
- Edge cases (empty inputs, boundary values)
- Error conditions
- Input validation

### 2. **Descriptive Test Names**
Tests use clear, descriptive names that explain what is being tested:
```javascript
test('should add two positive numbers', () => {
  expect(math.add(2, 3)).toBe(5);
});
```

### 3. **Error Testing**
Input validation and error handling are thoroughly tested:
```javascript
test('should throw error for non-number inputs', () => {
  expect(() => math.add('2', 3)).toThrow('Both arguments must be numbers');
});
```

### 4. **Test Organization**
Tests are organized using `describe` blocks for logical grouping:
```javascript
describe('Math utilities', () => {
  describe('add', () => {
    // Tests for add function
  });
  
  describe('subtract', () => {
    // Tests for subtract function
  });
});
```

## 📈 Continuous Integration

The project includes a GitHub Actions workflow that:

- Runs tests on multiple Node.js versions (16.x, 18.x, 20.x)
- Executes linting checks
- Generates coverage reports
- Uploads coverage to Codecov

## 🛠️ Code Quality

### ESLint Configuration
The project uses ESLint with rules for:
- Consistent indentation (2 spaces)
- Single quotes for strings
- Required semicolons
- Error equality checks
- No unused variables

### Example Test Structure

```javascript
describe('Function name', () => {
  test('should handle normal case', () => {
    // Arrange
    const input = 'test data';
    
    // Act
    const result = functionUnderTest(input);
    
    // Assert
    expect(result).toBe('expected output');
  });
  
  test('should handle edge case', () => {
    // Test edge cases
  });
  
  test('should throw error for invalid input', () => {
    expect(() => functionUnderTest(invalidInput))
      .toThrow('Expected error message');
  });
});
```

## 📚 Learning Objectives

This testing setup demonstrates:

1. **Unit Testing**: Testing individual functions in isolation
2. **Test Coverage**: Measuring how much code is tested
3. **Error Handling**: Testing both success and failure scenarios
4. **Test Organization**: Structuring tests for maintainability
5. **CI/CD Integration**: Automated testing in development workflow
6. **Code Quality**: Using linters and formatters

## 🔍 Test Examples

### Mathematical Functions
- Basic arithmetic operations (add, subtract, multiply, divide)
- Edge cases (division by zero, negative numbers)
- Input validation (non-numeric inputs)
- Special cases (factorial of 0, square root of negative numbers)

### String Manipulation
- Text transformations (capitalize, reverse, case conversions)
- String analysis (palindrome detection, word counting)
- String formatting (truncation with custom suffixes)
- Input validation and edge cases

### Array Operations
- Data manipulation (removing duplicates, chunking, flattening)
- Set operations (intersection, difference)
- Functional operations (grouping, shuffling)
- Comprehensive edge case testing

This comprehensive test suite serves as both a demonstration of testing best practices and a practical example for learning test-driven development (TDD) principles.