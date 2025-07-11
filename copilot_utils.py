"""
GitHub Copilot Demo: Utility Functions
=====================================

This module demonstrates various utility functions that could be generated
with the help of GitHub Copilot. Each function includes comprehensive
documentation and examples.

Author: GitHub Copilot & Developer
Date: 2025
"""

import re
import json
from datetime import datetime, timedelta
from typing import List, Dict, Optional, Union


def validate_email(email: str) -> bool:
    """
    Validate an email address using regex pattern.
    
    Args:
        email (str): The email address to validate
        
    Returns:
        bool: True if email is valid, False otherwise
        
    Examples:
        >>> validate_email("user@example.com")
        True
        >>> validate_email("invalid-email")
        False
    """
    # More strict email validation to avoid consecutive dots
    pattern = r'^[a-zA-Z0-9][a-zA-Z0-9._%+-]*[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9]\.[a-zA-Z]{2,}$'
    
    # Additional check for consecutive dots
    if '..' in email:
        return False
    
    return re.match(pattern, email) is not None


def generate_password(length: int = 12, include_symbols: bool = True) -> str:
    """
    Generate a random password with specified length and character types.
    
    Args:
        length (int): Length of the password (default: 12)
        include_symbols (bool): Whether to include special symbols (default: True)
        
    Returns:
        str: Generated password
        
    Examples:
        >>> len(generate_password(8))
        8
        >>> len(generate_password(16, False))
        16
    """
    import random
    import string
    
    characters = string.ascii_letters + string.digits
    if include_symbols:
        characters += "!@#$%^&*"
    
    return ''.join(random.choice(characters) for _ in range(length))


def format_currency(amount: float, currency_code: str = "USD") -> str:
    """
    Format a numeric amount as currency string.
    
    Args:
        amount (float): The amount to format
        currency_code (str): Currency code (default: "USD")
        
    Returns:
        str: Formatted currency string
        
    Examples:
        >>> format_currency(1234.56)
        '$1,234.56'
        >>> format_currency(999.99, "EUR")
        '€999.99'
    """
    symbols = {
        "USD": "$",
        "EUR": "€",
        "GBP": "£",
        "JPY": "¥"
    }
    
    symbol = symbols.get(currency_code, currency_code)
    return f"{symbol}{amount:,.2f}"


def calculate_age(birth_date: str) -> int:
    """
    Calculate age based on birth date string.
    
    Args:
        birth_date (str): Birth date in YYYY-MM-DD format
        
    Returns:
        int: Age in years
        
    Examples:
        >>> calculate_age("1990-01-01")  # This will vary based on current date
        33
    """
    birth = datetime.strptime(birth_date, "%Y-%m-%d")
    today = datetime.now()
    age = today.year - birth.year
    
    # Adjust if birthday hasn't occurred this year yet
    if today.month < birth.month or (today.month == birth.month and today.day < birth.day):
        age -= 1
    
    return age


def slugify(text: str) -> str:
    """
    Convert a string to a URL-friendly slug.
    
    Args:
        text (str): The text to slugify
        
    Returns:
        str: URL-friendly slug
        
    Examples:
        >>> slugify("Hello World!")
        'hello-world'
        >>> slugify("Special Characters @#$%")
        'special-characters'
    """
    # Convert to lowercase and replace spaces with hyphens
    slug = re.sub(r'[^\w\s-]', '', text.lower())
    slug = re.sub(r'[-\s]+', '-', slug)
    return slug.strip('-')


def chunk_list(data: List, chunk_size: int) -> List[List]:
    """
    Split a list into smaller chunks of specified size.
    
    Args:
        data (List): The list to chunk
        chunk_size (int): Size of each chunk
        
    Returns:
        List[List]: List of chunks
        
    Examples:
        >>> chunk_list([1, 2, 3, 4, 5], 2)
        [[1, 2], [3, 4], [5]]
    """
    return [data[i:i + chunk_size] for i in range(0, len(data), chunk_size)]


def deep_merge_dicts(dict1: Dict, dict2: Dict) -> Dict:
    """
    Deep merge two dictionaries, with dict2 values taking precedence.
    
    Args:
        dict1 (Dict): First dictionary
        dict2 (Dict): Second dictionary (takes precedence)
        
    Returns:
        Dict: Merged dictionary
        
    Examples:
        >>> deep_merge_dicts({"a": 1, "b": {"c": 2}}, {"b": {"d": 3}})
        {'a': 1, 'b': {'c': 2, 'd': 3}}
    """
    result = dict1.copy()
    
    for key, value in dict2.items():
        if key in result and isinstance(result[key], dict) and isinstance(value, dict):
            result[key] = deep_merge_dicts(result[key], value)
        else:
            result[key] = value
    
    return result


def retry_with_backoff(func, max_retries: int = 3, backoff_factor: float = 1.0):
    """
    Decorator to retry a function with exponential backoff.
    
    Args:
        func: Function to retry
        max_retries (int): Maximum number of retry attempts
        backoff_factor (float): Backoff multiplier
        
    Returns:
        Function wrapper
    """
    import time
    import functools
    
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        for attempt in range(max_retries + 1):
            try:
                return func(*args, **kwargs)
            except Exception as e:
                if attempt == max_retries:
                    raise e
                
                wait_time = backoff_factor * (2 ** attempt)
                time.sleep(wait_time)
        
    return wrapper


def sanitize_filename(filename: str) -> str:
    """
    Sanitize a filename by removing or replacing invalid characters.
    
    Args:
        filename (str): The filename to sanitize
        
    Returns:
        str: Sanitized filename
        
    Examples:
        >>> sanitize_filename("file<name>?.txt")
        'filename.txt'
    """
    # Remove invalid characters for most filesystems
    invalid_chars = r'[<>:"/\\|?*]'
    sanitized = re.sub(invalid_chars, '', filename)
    
    # Remove leading/trailing dots and spaces
    sanitized = sanitized.strip('. ')
    
    # Ensure filename isn't too long (most filesystems limit to 255 chars)
    if len(sanitized) > 255:
        name, ext = sanitized.rsplit('.', 1) if '.' in sanitized else (sanitized, '')
        max_name_length = 255 - len(ext) - 1 if ext else 255
        sanitized = name[:max_name_length] + ('.' + ext if ext else '')
    
    return sanitized or 'untitled'


if __name__ == "__main__":
    # Example usage of the utility functions
    print("GitHub Copilot Utility Functions Demo")
    print("=" * 40)
    
    # Email validation demo
    emails = ["user@example.com", "invalid-email", "test@domain.co.uk"]
    for email in emails:
        print(f"Email '{email}' is valid: {validate_email(email)}")
    
    print("\n" + "-" * 40)
    
    # Password generation demo
    print(f"Generated password: {generate_password(16)}")
    print(f"Generated password (no symbols): {generate_password(12, False)}")
    
    print("\n" + "-" * 40)
    
    # Currency formatting demo
    amounts = [1234.56, 999.99, 0.50]
    for amount in amounts:
        print(f"${amount} formatted: {format_currency(amount)}")
    
    print("\n" + "-" * 40)
    
    # Slugify demo
    texts = ["Hello World!", "Special Characters @#$%", "GitHub Copilot Demo"]
    for text in texts:
        print(f"'{text}' -> '{slugify(text)}'")