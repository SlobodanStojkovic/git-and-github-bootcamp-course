/* 
git clone <url> - clone a repository including full Git history of the cloned project
git remote -v - view project remote repository URL
git remote add origin http... - add project remote, where origin can be any name of our choice but in most cases its used origin
git remote rename <old> <new> - rename remote
git remote remove <name> - remove a remote

git push origin master - push up the master branch to our origin remote (git push <remote-name> <branch>)
git push origin develop - push up the develop branch to our origin remote
git push origin <local-branch-name>:<remote-branch-name> - to push our local branch to a remote branch of different name
git push --set-upstream origin <branch-name> OR git push -u origin <branch-name> allows us to push changes just using GIT PUSH, without the need to specify git push origin <branch-name>

git branch -M <new-branch-name> - to rename a branch
git branch -r - view remote tracking branch

FETCHING allows us to download changes from a remote repository, BUT those changes will not be automatically integrated into our working files. It lets us see what others have been working on, without having to merge those changes into our local repo.
git fetch <remote> - fetches branches and history from a specific remote repository. It only updates remote tracking branches. For example git fetch origin would fetch all changes from the origin remote repository.
git fetch origin master - would retrieve the latest information from the master branch on the origin remote repository (git fetch <remote> <branch>). 

git checkout origin/<branch-name> - If after using git fetch we see that remote repository is AHEAD of ours we can checkout to it to see the changes. We will enter detached head and see the new work done by others, new commits that we dont have locally.

git pull - retrieve changes from a remote repository but unlike fetch, pull actually UPDATES OUR HEAD branch with whatever changes are retrieved from the remote.
git pull origin master - would pull the latest information from the origins master branch and merge those changes into our current branch.

GITHUB GISTS are a simple way to share code snippets and useful fragments with others. Gists are much easier to create, but offer far fewer features than a typical Github repository.

WORKFLOW TYPES:
1. CENTRALIZED WORKFLOW - where whole team works on master branch, all changes are made and push to master.
2. FEATURE BRANCHES - all new development should be done on separate branches. Master is treated as the official project history.
3. PULL REQUESTS - a feature built in to products like Github & Bitbucket. They allow developers to alert team-members to new work that needs to be reviewed. They provide a mechanism to approve or reject the work on a given branch. They also help facilitate discussion and feedback on the specified commits.
4. FORK & CLONE - instead of just one centralize Github repository, every developer has their own Github repository in addition to the "main" repo. Developers make changes and push to their own forks before making pull requests. It is very commonly used on large open-


====================
(3 - PR) When we receive a PULL request that has conflicts and we are the ones that supervise the merge and autorize the PR, to merge the branch and resolve the conflicts locally we can switch to the branch in question, then merge in master and resolve the conflicts:
git fetch origin
git switch my-new-feature-branch
git merge master
fix conflicts!

Then we switch to master, merge in the feature branch (now with no confilcts) and push changes up to Github.
git switch master
git merge my-new-feature-branch
git push origin master
====================

Forking - Github allows us to create personal copies of other peoples repositories. We call those copise a "fork" of the original. When we fork a repo, we are basically asking Github "Make me my own copy of this repo please". As with pull requests, forking is not a Git feature. The ability to fork is implemented by Github. After we have forked repo, we have our very own copy of the repo where we can do whatever we want. We can make changes, add features, and do everything we want without a fear of disturbing the original repository. If we want to share our work, we can make a pull request from our fork to the original repo.
FORK SUMMARY:
1. Fork the project
2. Clone the fork
3. Add Upstream Remote (so that you can pull latest changes from original repository) > to view remotes git remote -v, to pull changes its usually git pull upstream main
4. Do some work
5. Push to origin (our forked repository)
6. Open Pull Request (so that owner can review and allow or close PR to original repository)

REBASING - There are two main ways to use the git rebase command:
1. as an alternative to merging,
2. as a cleanup tool

The feature branch has a bunch of merge commits. If the master branch is very active, my feature branch's history is muddied. We can instead rebase the feature branch onto the master branch. This moves the entire feature branch so that it BEGINS at the tip of the master branch. All of the work is still there, but we have re-written history. Instead of using a merge commit, rebasing rewrites history by creating new commits for each of the original feature branch commits. We can also wait until we are done with a feature and then rebase the feature branch onto the master branch. The branch that we are on when calling rebase is the one that we are rebasing.
git switch feature
git rebase master
WHY REBASE? We get a much cleaner project history. No unnecessary merge commits! We end up with a linear project history.
NEVER REBASE commits that have been shared with others. If you have already pushed commits up to Github... DO NOT REBASE them u nless you are positive no one on the team is using those commits.

REWRITING HISTORY - sometimes we want to rewrite, delete, rename, or even reorder commits (before sharing them). We can do this using git rebase! This is the second use of rebasing - as a cleanup tool. Runnning git rebase with the -i option will enter the interactive mode, which allows us to edit commits, add files, drop commits, etc. We need to specify how far back we want to rewrite commits. Also, notice that we are not rebasing onto another branch. Instead, we are rebasing a series of commits onto the HEAD they currently are based on.
git rebase -i HEAD~5 - rewrite last 5 commits
After running this command it will open up the text editor where we will see a list of commits alongside a list of commands that we can choose from. Here are a couple of the more commonly used commands:
=====================
pick - use the commit
reword - use the commit, but edit the commit message
edit - use commmit, but stop for amending
fixup - use commit contents but meld it into previous commit and discard the commit message (in case of typos or small changes)
drop - remove commit
=====================
The order of commits will be from oldest on top to newest on bottom. After changes HASH of every commit (of the last 5 in this example) will be changed even if we havent changed anything in that commit.
*/
