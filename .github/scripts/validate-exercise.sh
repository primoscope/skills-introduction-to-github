#!/bin/bash

# GitHub Skills Exercise Validator
# This script helps validate common requirements for the GitHub Skills introduction exercise

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

check_branch() {
    info "Checking branch configuration..."
    
    current_branch=$(git branch --show-current 2>/dev/null || echo "")
    
    if [ "$current_branch" = "my-first-branch" ]; then
        success "Currently on the correct branch: my-first-branch"
        return 0
    elif [ "$current_branch" = "main" ] || [ "$current_branch" = "master" ]; then
        error "You're on the $current_branch branch, but you should be on 'my-first-branch'"
        echo "To fix this:"
        echo "1. Create the branch: git checkout -b my-first-branch"
        echo "2. Or switch to it: git checkout my-first-branch"
        return 1
    else
        error "You're on branch '$current_branch', but should be on 'my-first-branch'"
        echo "Expected branch name: my-first-branch (exactly, case-sensitive)"
        return 1
    fi
}

check_profile_file() {
    info "Checking PROFILE.md file..."
    
    if [ ! -f "PROFILE.md" ]; then
        error "PROFILE.md file not found"
        echo "To fix this:"
        echo "1. Create a file named exactly 'PROFILE.md' (case-sensitive)"
        echo "2. Place it in the repository root (not in any subfolder)"
        echo "3. Add the content: 'Welcome to my GitHub profile!'"
        return 1
    fi
    
    success "PROFILE.md file exists"
    
    # Check file content
    if grep -q "Welcome to my GitHub profile!" PROFILE.md; then
        success "PROFILE.md contains the expected content"
    else
        warning "PROFILE.md exists but content may not match expected format"
        echo "Expected content: 'Welcome to my GitHub profile!'"
        echo "Current content:"
        cat PROFILE.md
    fi
    
    return 0
}

check_git_status() {
    info "Checking git status..."
    
    if ! git diff --quiet HEAD -- PROFILE.md 2>/dev/null; then
        warning "PROFILE.md has uncommitted changes"
        echo "Don't forget to commit your changes!"
        return 1
    fi
    
    if git log --oneline | grep -q "Add PROFILE.md"; then
        success "Found commit with 'Add PROFILE.md' message"
    else
        warning "No commit found with message 'Add PROFILE.md'"
        echo "Make sure your commit message matches exactly: 'Add PROFILE.md'"
    fi
    
    return 0
}

check_remote_branch() {
    info "Checking if branch exists on GitHub..."
    
    if git ls-remote --heads origin my-first-branch | grep -q my-first-branch; then
        success "Branch 'my-first-branch' exists on GitHub"
    else
        error "Branch 'my-first-branch' not found on GitHub"
        echo "To fix this:"
        echo "1. Push your branch: git push -u origin my-first-branch"
        return 1
    fi
    
    return 0
}

print_summary() {
    echo
    echo -e "${BLUE}=== GitHub Skills Exercise Validation Summary ===${NC}"
    echo
    
    if [ $1 -eq 0 ]; then
        success "All checks passed! You're ready to continue."
        echo
        info "Next steps:"
        echo "• If you're on Step 2: Create a pull request"
        echo "• If you're on Step 3: Make sure PR title is 'Add my first file'"
        echo "• If you're on Step 4: Merge your pull request"
    else
        error "Some issues found. Please fix them and try again."
        echo
        info "For detailed help, check:"
        echo "• GitHub repository instructions"
        echo "• .github/ERROR_GUIDE.md in your repository"
        echo "• GitHub Skills discussions: https://github.com/orgs/skills/discussions"
    fi
    echo
}

# Main validation logic
main() {
    echo -e "${BLUE}🔍 GitHub Skills Exercise Validator${NC}"
    echo
    
    exit_code=0
    
    # Run all checks
    check_branch || exit_code=1
    echo
    
    check_profile_file || exit_code=1
    echo
    
    check_git_status || exit_code=1
    echo
    
    if git remote get-url origin >/dev/null 2>&1; then
        check_remote_branch || exit_code=1
        echo
    else
        warning "No git remote found - skipping remote checks"
        echo
    fi
    
    print_summary $exit_code
    
    exit $exit_code
}

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    error "Not in a git repository"
    echo "Please run this script from your GitHub Skills repository"
    exit 1
fi

# Run main function
main "$@"