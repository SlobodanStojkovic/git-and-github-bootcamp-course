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
*/