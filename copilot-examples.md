# GitHub Copilot Examples

This file demonstrates various ways to use GitHub Copilot effectively when contributing to GitHub repositories.

## 🤖 What is GitHub Copilot?

GitHub Copilot is an AI-powered code completion tool that helps developers write code faster and more efficiently. It can:

- Generate code snippets based on comments
- Complete functions and classes
- Suggest improvements to existing code
- Help write documentation and tests
- Assist with debugging and refactoring

## 🚀 Getting Started with Copilot

### 1. Code Generation from Comments

```python
# Function to calculate the factorial of a number
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Function to check if a number is prime
def is_prime(number):
    if number < 2:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    return True
```

### 2. Test Generation

```python
import unittest

class TestMathFunctions(unittest.TestCase):
    
    def test_factorial(self):
        self.assertEqual(factorial(0), 1)
        self.assertEqual(factorial(1), 1)
        self.assertEqual(factorial(5), 120)
        self.assertEqual(factorial(10), 3628800)
    
    def test_is_prime(self):
        self.assertFalse(is_prime(0))
        self.assertFalse(is_prime(1))
        self.assertTrue(is_prime(2))
        self.assertTrue(is_prime(17))
        self.assertFalse(is_prime(25))

if __name__ == '__main__':
    unittest.main()
```

### 3. Documentation Generation

```javascript
/**
 * Validates an email address using regex pattern
 * @param {string} email - The email address to validate
 * @returns {boolean} True if email is valid, false otherwise
 * @example
 * validateEmail('user@example.com') // returns true
 * validateEmail('invalid-email') // returns false
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Formats a date string to a more readable format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
```

## 💡 Best Practices for Using Copilot

### 1. Write Clear Comments
- Be specific about what you want the code to do
- Include expected inputs and outputs
- Mention any constraints or special requirements

### 2. Review and Refine
- Always review Copilot's suggestions
- Test the generated code thoroughly
- Refine and optimize as needed

### 3. Security Considerations
- Be cautious with sensitive data
- Review security implications of generated code
- Don't blindly trust AI-generated security-related code

### 4. Learning Opportunity
- Use Copilot as a learning tool
- Understand the code it generates
- Learn new patterns and techniques

## 🔧 Common Use Cases

### Data Processing
```python
# Function to clean and process user data
def clean_user_data(raw_data):
    cleaned_data = []
    for user in raw_data:
        if user.get('email') and user.get('name'):
            cleaned_user = {
                'name': user['name'].strip().title(),
                'email': user['email'].lower().strip(),
                'age': int(user.get('age', 0)) if user.get('age') else None
            }
            cleaned_data.append(cleaned_user)
    return cleaned_data
```

### API Integration
```javascript
// Function to fetch user profile from API
async function fetchUserProfile(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${getAuthToken()}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch user profile:', error);
        throw error;
    }
}
```

## 📚 Additional Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Copilot Best Practices](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)
- [AI-Assisted Development Tips](https://github.blog/2023-10-09-prompting-github-copilot-chat-to-become-your-personal-ai-assistant-for-accessibility/)

## 🎯 Next Steps

1. Install GitHub Copilot in your IDE
2. Practice writing descriptive comments
3. Experiment with different prompting techniques
4. Always review and test generated code
5. Share your learnings with the community

---

*This example demonstrates how GitHub Copilot can be used to enhance productivity while maintaining code quality and security standards.*