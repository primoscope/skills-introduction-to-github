## Step 3: Open a pull request

_Nice work making that commit! :sparkles:_

Now that you have made a change to the project and created a commit, it’s time to share your proposed change through a pull request!

**What is a pull request?**: Collaboration happens on a _[pull request](https://docs.github.com/en/get-started/quickstart/github-glossary#pull-request)_. The pull request shows the changes in your branch to other people and allows people to accept, reject, or suggest additional changes to your branch. In a side by side comparison, this pull request is going to keep the changes you just made on your branch and propose applying them to the `main` project branch. For more information about pull requests, see "[About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".

### :keyboard: Activity: Create a pull request

You may have noticed after your commit that a message displayed indicating your recent push to your branch and providing a button that says **Compare & pull request**.

![screenshot of message and button](https://github.com/user-attachments/assets/a9f29bd2-0461-4bf9-9935-67730761bcd3)

To create a pull request automatically, click **Compare & pull request** button, and then skip to step 5 below. Alternately, you practice creating it manually using the first 4 steps.

1. In the header menu of your repository, click the **Pull requests** tab .
2. Click the **New pull request** button.
3. Select the following branches using the dropdown menus.
   
   - **base:** `main`
   - **compare:** `my-first-branch`

   ![screenshot showing both branch selections](https://github.com/user-attachments/assets/8f01524c-c973-4f4f-a75c-0717fe09b664)

4. Click **Create pull request**.

5. Enter a title for your pull request. By default, the title will automatically be the name of your branch. For this exercise, let's edit the field to say `Add my first file`.

6. The next field helps you provide a **description** of the changes you made. Please enter a short description of what you’ve accomplished so far. As a reminder, you have: created a new branch, created a file, and made a commit.

   ![screenshot showing pull request](https://github.com/user-attachments/assets/c6e6af6b-d31e-4628-91ac-de6adb5b390c)

7. Click **Create pull request**.

8. Now that you've started a place to collaborate, Mona should already be busy checking your work. Give her a moment and keep watch in the comments. You will see her respond with progress info and the next lesson.


<details>
<summary>Having trouble? 🤷</summary><br/>

**Pull request not being recognized?** Here's what to verify:

### ✅ Pull Request Title
- **Problem:** Incorrect title
- **Solution:** Title must be exactly `Add my first file`
- **Common mistakes:** `add my first file`, `Add My First File`, `Add first file`

### ✅ Pull Request Description
- **Problem:** Empty description field
- **Solution:** Add any description about your changes
- **Example:** "Added my first PROFILE.md file to learn GitHub basics"

### ✅ Branch Configuration
- **Problem:** Wrong base or compare branches
- **Solution:** 
  - **base:** must be `main`
  - **compare:** must be `my-first-branch`

### ✅ Pull Request Status
- **Problem:** Pull request is draft or closed
- **Solution:** Ensure pull request is open (not draft, not closed)

### ✅ Previous Steps
- **Problem:** Previous steps not completed
- **Solution:** Ensure you've successfully completed Steps 1 and 2
- **How to check:** Look for green checkmarks in previous issue comments

### 🔄 Quick Fix Guide
1. **For wrong title:** Click "Edit" next to the title and change to `Add my first file`
2. **For empty description:** Click "Edit" and add any description
3. **For wrong branches:** Close PR and create new one with correct branches
4. **For draft status:** Click "Ready for review"

**Need more help?** Check our [detailed troubleshooting guide](.github/ERROR_GUIDE.md)!

</details>
