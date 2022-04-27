/* 
git log --oneline - displays git logs in one line

If we forgot to add a file to the commit we just made:
git add forgotten_file  //or if we want to fix a typo in last commit message we skip this step
git commit --amend

Inside .gitignore file we can put exact filenames .filename, or we can put folderName/ to ignore entired folder or *.log to ignore all files with .log extension.
Useful Links: 
https://www.toptal.com/developers/gitignore/
https://git-scm.com/docs/gitignore

git branch - list the branches
git branch <branch-name> - make a new branch based upon the current head (it just creates the branch, doesnt switch us to it)
git branch -v - show all branches with hash and description of last commit

git switch -c <new-branch-name> - create a new branch AND switch to it all in one go -c is short for "create"
git checkout -b <new-branch-name> - create a new branch AND switch to it all in one

git switch <branch-name> - switch to branch
git checkout <branch-name> - switch to branch or restore working tree files, it has a lot more uses than git switch

git commit -a -m "Commit message" - add ALL and commit with a message

git branch -d <branch-to-delete> - delete a branch if it is fully merged, first move to some other branch
git branch -D <branch-to-delete> - delete a branch by FORCE, irrespective of its merge status

git branch -m <new-branch-name> - rename a branch that we are on

HEAD is simply a pointer that refers to the current "location" in your repository. It points to a particular branch reference. HEAD always points to the latest commit we made on branch that we are on.

Fast-Forward merge is catching up with master to the branch that has several commits after master, master doesnt have any commits after that branch has made from it.To merge:
git switch master
git merge <name-of-merging-branch>

git diff - shows changes between our Working directory and our staging area
git dff HEAD - shows changes between HEAD and working directory (staged or unstaged, but only on TRACKED files, new files are untracked), so it shows all changes since last commit
git diff --staged or --cached - will list the changes between the staging area and our last commit
git diff HEAD [specific-file] or git diff --staged [specific-file] - view changes only in specific file that we want or multiple files
git diff branch1 branch2 - shows changes between two branches, especially useful for seeing if merge has been succesful
git diff branch1..branch2 - same as above
git diff commit1hash..commit2hash - compare changes between 2 commits (to get the hashes we type git log --oneline)

If we switch branches with uncommited changes they might come with us to the destination branch IF WE HAVE NO CONFLICTS. If we have conflicts we can use git stash.

git stash - save changes since last commit, if we stash multiple times they will be stashed in order that we added them in
git stash pop - apply the changes that you have stashed, and it removes it from the stash.
git stash apply - is used to apply whatever is stashed away, without removing it from the stash. This is useful when we want to apply stashed changes to multiple branches.
git stash list - view list of our stashes
git stash apply stash@{2} - apply stash with id number 2 from our list
git stash drop stash@{2} - delete a particular stash, here we delete stash with id number 2
git stash clear - delete stash list

git checkout <commit-hash-7characters> - detached head state, where we can look around and then return to master to reattach head or we can make a new branch from here > Attach the Head. Head is detached when it points to commit, it usually points to branch.

git checkout HEAD~1 - refers to the commit before HEAD (parent), HEAD~2 refers to 2 commits before HEAD (grandparentgi)

git switch - - switch to the branch that we were before

git checkout HEAD <file-name> - remove contents from the file that we made and return to last commit content, removed content is DISCARDED
git checkout -- <file-name> - same as above
git restore <file-name> - same as above, its a new command that helps with undoing operations. Content is PERMANENTLY DISCARDED.

git restore --source HEAD~1 app.js - will restore the contents of app.js file to its state from the commit prior to HEAD. We can also use a particular commit hash as a source.
git restore --staged <file-name> - unstage a file that is staged for next commit

git reset <commit-hash> - will reset the repo back to a specific commit. The commits are GONE but files changes are kept.
git reset <commit-hash> --hard - undo both the commits AND the actual changes in our files
git reset --hard HEAD~1 - will delete the last commit and associated changes

git revert <commit-hash> - is similar to git reset in that they both "undo" changes, but they accomplish it in different ways. git reset actually moves the branch pointer backwards, eliminating commits. git revert instead creates a brand new commit which reverses/undos the changes from a commit. Because it results in a new commit, you will be propmted to enter a commit message. Its much more practical when it comes to collaboration. REVERT should be used instead of reset.

cat .git/HEAD - view where Head points
*/
