# 🚨 Troubleshooting Guide for GitHub Skills: Introduction to GitHub

This guide helps you resolve common issues you might encounter while completing the "Introduction to GitHub" exercise.

## 🔍 Quick Diagnosis

**Not receiving feedback from Mona?** Here's how to troubleshoot:

### 1️⃣ Check Your Current Step

Look at the issue comments to see what step you're on:
- Step 1: Create a branch
- Step 2: Commit a file  
- Step 3: Open a pull request
- Step 4: Merge your pull request

### 2️⃣ Common Issues by Step

#### Step 1: Branch Creation Issues

**❌ Problem:** Branch not created or wrong name
- **✅ Solution:** Create a branch named exactly `my-first-branch`
- **How to fix:**
  1. Go to your repository's main page
  2. Click the branch dropdown (shows "main")
  3. Type `my-first-branch` in the text box
  4. Click "Create branch: my-first-branch from main"

**❌ Problem:** Created branch but still on main
- **✅ Solution:** Switch to your branch
- **How to fix:** Click the branch dropdown and select `my-first-branch`

#### Step 2: File Commit Issues

**❌ Problem:** File not found or wrong name
- **✅ Solution:** Create file named exactly `PROFILE.md` (case-sensitive)
- **How to fix:**
  1. Make sure you're on `my-first-branch`
  2. Click "Add file" → "Create new file"
  3. Type exactly `PROFILE.md` as filename
  4. Add content: `Welcome to my GitHub profile!`

**❌ Problem:** File in wrong location
- **✅ Solution:** File must be in the repository root (not in a folder)
- **How to fix:** Don't include any `/` in the filename path

**❌ Problem:** Wrong commit message
- **✅ Solution:** Use commit message `Add PROFILE.md`
- **How to fix:** Edit the commit message before clicking "Commit changes"

#### Step 3: Pull Request Issues

**❌ Problem:** Wrong pull request title
- **✅ Solution:** Title must be exactly `Add my first file`
- **How to fix:** Edit the pull request title field

**❌ Problem:** Empty description
- **✅ Solution:** Add any description about your changes
- **How to fix:** Write something like "Added my first PROFILE.md file to learn GitHub basics"

**❌ Problem:** Wrong base or compare branch
- **✅ Solution:** Base should be `main`, compare should be `my-first-branch`
- **How to fix:** Use the dropdown menus to select correct branches

#### Step 4: Merge Issues

**❌ Problem:** Merge button is grayed out
- **✅ Solution:** Wait for previous steps to complete
- **How to fix:** Check that all previous workflow checks have passed (green checkmarks)

## 🔧 Advanced Troubleshooting

### Workflow Not Triggering

If workflows aren't running:

1. **Check Repository Settings:**
   - Go to Settings → Actions → General
   - Ensure "Allow all actions and reusable workflows" is selected

2. **Verify Branch Names:**
   - Branch names are case-sensitive
   - Use exactly `my-first-branch` (no extra spaces or characters)

3. **Check File Paths:**
   - `PROFILE.md` must be in repository root
   - File names are case-sensitive

### Starting Over

If you need to reset:

1. **Delete the branch:** Go to repository → Branches → Delete `my-first-branch`
2. **Close pull request:** Go to Pull Requests → Close any open PR
3. **Start fresh:** Begin again from Step 1

### Still Having Issues?

1. **Check the Actions tab** to see workflow status
2. **Review your repository structure** - compare with working examples
3. **Read error messages carefully** - they often contain the exact fix needed

## 💡 Pro Tips

- **Case sensitivity matters:** `Profile.md` ≠ `PROFILE.md`
- **Exact names required:** Don't add prefixes or suffixes
- **Wait for feedback:** Give workflows 1-2 minutes to process
- **One step at a time:** Complete each step fully before moving to the next

---

**Need more help?** Check the [GitHub Skills discussions](https://github.com/orgs/skills/discussions) or [GitHub Docs](https://docs.github.com/en/get-started).