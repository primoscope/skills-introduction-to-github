"""
Test suite for Copilot Utility Functions
========================================

This file demonstrates how GitHub Copilot can help generate comprehensive
test suites for your code. Tests are crucial for maintaining code quality
and ensuring functionality works as expected.

Run with: python -m pytest test_copilot_utils.py -v
"""

import unittest
from datetime import datetime
import sys
import os

# Add the current directory to the path to import our module
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from copilot_utils import (
    validate_email,
    generate_password,
    format_currency,
    calculate_age,
    slugify,
    chunk_list,
    deep_merge_dicts,
    sanitize_filename
)


class TestCopilotUtils(unittest.TestCase):
    """Test suite for utility functions generated with GitHub Copilot."""

    def test_validate_email(self):
        """Test email validation function."""
        # Valid emails
        valid_emails = [
            "user@example.com",
            "test.email@domain.co.uk",
            "name+tag@example.org",
            "user123@test-domain.com"
        ]
        
        for email in valid_emails:
            with self.subTest(email=email):
                self.assertTrue(validate_email(email), f"Should validate {email}")
        
        # Invalid emails
        invalid_emails = [
            "invalid-email",
            "@example.com",
            "user@",
            "user..name@example.com",
            "user@.com",
            ""
        ]
        
        for email in invalid_emails:
            with self.subTest(email=email):
                self.assertFalse(validate_email(email), f"Should not validate {email}")

    def test_generate_password(self):
        """Test password generation function."""
        # Test default length
        password = generate_password()
        self.assertEqual(len(password), 12)
        
        # Test custom length
        for length in [8, 16, 20]:
            password = generate_password(length)
            self.assertEqual(len(password), length)
        
        # Test without symbols
        password_no_symbols = generate_password(10, include_symbols=False)
        self.assertEqual(len(password_no_symbols), 10)
        # Should not contain special symbols
        symbols = "!@#$%^&*"
        self.assertFalse(any(char in symbols for char in password_no_symbols))
        
        # Test with symbols
        password_with_symbols = generate_password(20, include_symbols=True)
        self.assertEqual(len(password_with_symbols), 20)

    def test_format_currency(self):
        """Test currency formatting function."""
        # Test USD (default)
        self.assertEqual(format_currency(1234.56), "$1,234.56")
        self.assertEqual(format_currency(0.50), "$0.50")
        self.assertEqual(format_currency(1000000), "$1,000,000.00")
        
        # Test other currencies
        self.assertEqual(format_currency(999.99, "EUR"), "€999.99")
        self.assertEqual(format_currency(500.00, "GBP"), "£500.00")
        self.assertEqual(format_currency(1500, "JPY"), "¥1,500.00")
        
        # Test unknown currency
        self.assertEqual(format_currency(100, "XYZ"), "XYZ100.00")

    def test_calculate_age(self):
        """Test age calculation function."""
        # Test with a known date
        current_year = datetime.now().year
        
        # Someone born 25 years ago
        birth_year = current_year - 25
        birth_date = f"{birth_year}-01-01"
        age = calculate_age(birth_date)
        
        # Age should be 24 or 25 depending on current date
        self.assertIn(age, [24, 25])
        
        # Test edge cases - someone born this year
        # Use a date that's definitely in the past
        past_date = f"{current_year}-01-01"
        age_current_year = calculate_age(past_date)
        self.assertGreaterEqual(age_current_year, 0)

    def test_slugify(self):
        """Test string slugification function."""
        test_cases = [
            ("Hello World", "hello-world"),
            ("Special Characters @#$%", "special-characters"),
            ("Multiple   Spaces", "multiple-spaces"),
            ("CamelCase Text", "camelcase-text"),
            ("--Leading--Trailing--", "leading-trailing"),
            ("", "")
        ]
        
        for input_text, expected in test_cases:
            with self.subTest(input_text=input_text):
                self.assertEqual(slugify(input_text), expected)

    def test_chunk_list(self):
        """Test list chunking function."""
        # Test normal case
        data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        chunks = chunk_list(data, 3)
        expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        self.assertEqual(chunks, expected)
        
        # Test uneven chunks
        data = [1, 2, 3, 4, 5]
        chunks = chunk_list(data, 2)
        expected = [[1, 2], [3, 4], [5]]
        self.assertEqual(chunks, expected)
        
        # Test empty list
        chunks = chunk_list([], 3)
        self.assertEqual(chunks, [])
        
        # Test chunk size larger than list
        data = [1, 2]
        chunks = chunk_list(data, 5)
        expected = [[1, 2]]
        self.assertEqual(chunks, expected)

    def test_deep_merge_dicts(self):
        """Test deep dictionary merging function."""
        # Test simple merge
        dict1 = {"a": 1, "b": 2}
        dict2 = {"b": 3, "c": 4}
        result = deep_merge_dicts(dict1, dict2)
        expected = {"a": 1, "b": 3, "c": 4}
        self.assertEqual(result, expected)
        
        # Test nested merge
        dict1 = {"a": 1, "b": {"c": 2, "d": 3}}
        dict2 = {"b": {"d": 4, "e": 5}, "f": 6}
        result = deep_merge_dicts(dict1, dict2)
        expected = {"a": 1, "b": {"c": 2, "d": 4, "e": 5}, "f": 6}
        self.assertEqual(result, expected)
        
        # Test empty dictionaries
        self.assertEqual(deep_merge_dicts({}, {}), {})
        self.assertEqual(deep_merge_dicts({"a": 1}, {}), {"a": 1})
        self.assertEqual(deep_merge_dicts({}, {"a": 1}), {"a": 1})

    def test_sanitize_filename(self):
        """Test filename sanitization function."""
        test_cases = [
            ("normal_file.txt", "normal_file.txt"),
            ("file<name>?.txt", "filename.txt"),
            ("file/with\\slashes.doc", "filewithslashes.doc"),
            ("  .leading_dots.txt  ", "leading_dots.txt"),
            ("", "untitled"),
            ("file:with|invalid*chars.pdf", "filewithinvalidchars.pdf")
        ]
        
        for input_filename, expected in test_cases:
            with self.subTest(filename=input_filename):
                result = sanitize_filename(input_filename)
                self.assertEqual(result, expected)
        
        # Test very long filename
        long_name = "a" * 300 + ".txt"
        result = sanitize_filename(long_name)
        self.assertLessEqual(len(result), 255)
        self.assertTrue(result.endswith(".txt"))


class TestIntegration(unittest.TestCase):
    """Integration tests demonstrating real-world usage scenarios."""

    def test_user_registration_workflow(self):
        """Test a complete user registration workflow using multiple utilities."""
        # Simulate user registration data
        user_email = "new.user@example.com"
        user_display_name = "New User!"
        
        # Validate email
        self.assertTrue(validate_email(user_email))
        
        # Generate a password
        password = generate_password(12, include_symbols=True)
        self.assertEqual(len(password), 12)
        
        # Create a slug from display name
        username_slug = slugify(user_display_name)
        self.assertEqual(username_slug, "new-user")
        
        # Sanitize a profile picture filename
        uploaded_filename = "profile<pic>?.jpg"
        safe_filename = sanitize_filename(uploaded_filename)
        self.assertEqual(safe_filename, "profilepic.jpg")

    def test_data_processing_workflow(self):
        """Test data processing workflow with chunking and merging."""
        # Large dataset that needs to be processed in chunks
        large_dataset = list(range(1, 101))  # 100 items
        
        # Process in chunks of 10
        chunks = chunk_list(large_dataset, 10)
        self.assertEqual(len(chunks), 10)
        self.assertEqual(len(chunks[0]), 10)
        
        # Merge configuration dictionaries
        default_config = {
            "database": {"host": "localhost", "port": 5432},
            "cache": {"ttl": 3600}
        }
        
        user_config = {
            "database": {"host": "production.db.com"},
            "api": {"timeout": 30}
        }
        
        final_config = deep_merge_dicts(default_config, user_config)
        
        # Verify merge results
        self.assertEqual(final_config["database"]["host"], "production.db.com")
        self.assertEqual(final_config["database"]["port"], 5432)
        self.assertEqual(final_config["cache"]["ttl"], 3600)
        self.assertEqual(final_config["api"]["timeout"], 30)


if __name__ == "__main__":
    # Run the tests
    print("Running GitHub Copilot Utilities Test Suite")
    print("=" * 50)
    
    # Create a test suite
    loader = unittest.TestLoader()
    suite = unittest.TestSuite()
    
    # Add test classes
    suite.addTests(loader.loadTestsFromTestCase(TestCopilotUtils))
    suite.addTests(loader.loadTestsFromTestCase(TestIntegration))
    
    # Run tests with verbose output
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    
    # Print summary
    print("\n" + "=" * 50)
    print(f"Tests run: {result.testsRun}")
    print(f"Failures: {len(result.failures)}")
    print(f"Errors: {len(result.errors)}")
    
    if result.wasSuccessful():
        print("✅ All tests passed!")
    else:
        print("❌ Some tests failed.")
        sys.exit(1)