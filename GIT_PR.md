## How to do a pull request Workflow in Github

### Step 1 -- Git pull origin main

Make sure to pull all recent changes to main to start the branch-off process.

### Step 2 -- Add a branch

##### **Project Conventions, Standards & Procedures:**

 - Branch naming:
    - `[front/back]` / `[feat/fix/bug/refactor]` / `[issue # -]something-worked-on`
    - Eg: `front/feat/login-form-component`
    - Eg: `front/fix/nav-items-wrap-on-mobile`
    - Eg: `back/feat/get-items-route`

To add a branch 

```sh
checkout -b 2-user-data-json
```

### Step 3 --- Work on Feature

Commit AS OFTEN as you can!!! Commits really matter!. You SHOULD NOT do everything in 1 commit!

### Step 4 --- Merge Main into Working Branch (Optional)

'cd' into main branch
do `git pull`
'cd' into working branch
do `git merge __branch_name`
if there are merge conflicts, fix them and commit the changes

#### Feature Complete!!!

Now that you are done, and everything has been commited, you are going to PUSH the `BRANCH` into github.
```sh
git push origin __branch_name__
``` 

On github, create a pull request by, clicking `Pull Requests` button, then clicking the `new pull request` button on the page. Pick your branch, and fill out the form to generate a Pull request.




#### Anyone on your team can view your pull request

That means anyone can review people's codes. This is a good practice to see how other people are coding, and  using different methods.


#### If you have a merge conflict github will tell you

- There are 2 ways to fix it, one way, github will give you the tools ( BAD WAY)
- Switch to main/master, pull all the changes, switch back to your branch, MERGE master INTO your branch
and fix the conflicts!

Once you fixed them, push the branch back out, and your `pull request` will be updated.

#### How to Merge

Scroll down to `Merge Pull Request` Click the button, Click `confirm merge` and now everything will be added into your master/main branch.