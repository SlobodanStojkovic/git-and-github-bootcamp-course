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

GIT TAGS - Tags are pointers that refer to particular points in Git history. We can mark a particular moment in time with a tag. Tags are most ofthen used to mark version releases in projects (v4.1.0, v4.1.1, etc.) They can be think of as branch references that DO NOT CHANGE. Once a tag is created, it always refers to the same commit. It is just a label for a commit.
TWO TYPES OF TAGS:
1. Lightweight tags - just a name/label that points to a particular commit.
2. Annotated tags - they store extra meta data including the autor's name and email, the date, and a tagging message

Semantic Versioning spec outlines a standardized versioning system for software releases. It provides a consistent way for developers to give meaning to their software releases (how big of a change is this release??). Versions consist of three numbers separated by periods - ex. 2.4.1 
1.0.0 - Initial, first release
1.0.1 - Patch Release normally do not contain new features or significant changes. They typically signify bug fixes and other changes that do not impact how the code is used.
1.1.0 - Minor Release signify that new features or functionality have been added, but the project is still backwards compatible. No breaking changes. The new functionality is optional and should not force users to rewrite their own code.
2.0.0 - Major release signify significant changes that is no longer backwards compatible. Features may be removed or changed substantially.

git tag - will print a list of all the tags in the current repository.
git tag -l <pattern> - search for tags that match a particular pattern and then passing in a wildcard pattern.
git tag -l "*beta*" - will print a list of tags that include "beta" in their name
git checkout <tag> - to view the state of a repo at a particular tag, this puts us in detached head
git tag <tag-name> - create a new tag
git tag -a <tag-name> - create a new annotated tag. Git will then open our default text editor and propt us for additional information. Similar to git commit we can use -m option to pass a message directly and forgo the opening of the text editor. git tag -a v3.0.0 -m "Add ..."
git tag <tagname> <commit-hash> - tag an older commit by providing the commit hash
git tag -f <tagname> - Git will yell at us if we try to reuse a tag that is already referring to a commit. If we use the -f option, we can FORCE our tag through. Example git tag v17.0.3 <commit-hash> -f will add tag v17.0.3 to that commit hash we specified
git tag -d <tag-name> - Delete a tag
git push --tags - Git push command by defaults doesnt transfer tags to remote servers. If we have a lot of tags that we want to push up at once we can use --tags option to the git push command. This will transfer all of our tags to the remote server that are not already there.

GIT CONFIG file is for local per-repo settings configuration. We can configure name, email, colors and lots of other stuff. For more information about it visit https://git-scm.com/docs/git-config

REFS Folder - inside of refs we can find a heads directory. Refs/heads contains one file per branch in a repository. Each file is named after a branch and contains the hash of the commit at the tip of the branch. For example refs/heads/master contains the commit hash of the last commit on the master branch. Refs also contains a refs/tags folder which contains one file for each tag in the repo.

HEAD is just a text file that keeps track of where HEAD points. If it contains refs/heads/master, this means that HEAD is pointing to the master branch. In detached HEAD, the HEAD file contains a commit hash instead of a branch reference.

OBJECTS directory contains all the repo files. This is where Git stores the backups of files, the commits in a repo, and more. The files are all compressed and encrypted, so they won't look like much!

HASH - has exactly 40 characters of hexadecimal values, 0-9, a, b, c, d, e, f. Git uses a hashing function called SHA-1.

GIT DATABASE - git is a key-value data store. We can insert any kind of content into a Git repository, and Git will hand us a unique key we can later use to retrieve that content. These keys that we get back are SHA-1 checksums.

There are 4 Types of GIT OBJECTS:
1. commit
2. tree
3. blob
4. annotated tag

git hash-object <file> - command takes some data, stores in our .git/objects directory and gives us back the unique SHA-1 hash that refers to that data object. In the simplest form Git simply takes some content and returns the unique key that WOULD be used to store our object. But it does not actually store anything.
echo "hi" | git hash-object --stdin - will always return 45b983be36b73c0788dc9cbcb76cbb80fc7bb057 , --stdin means standard in, if we add -w we will write it inside our .git/objects folder. First 2 letters are our folder name, last 38 are file name.

git cat-file -p <object-hash> - To retrieve the data that is stored. Now that we have data stored in our git object database, we can try retrieving it using the git cat-file command. The -p option tells Git to pretty print the contents of the object based on its type. We can store the files by using git cat-file <hash> > filename.txt

GIT BLOBS - (binary large object) are the object type Git uses to store the contents of files in a given repository. Blobs don't even include the filenames of each file or any other data. They just store the contents of a file!

TREES - are Git objects used to store the contents of a directory. Each tree contains pointers that can refer to blobs and to other trees. Each entry in a tree contains the SHA-1 hash of a blob or tree, as well as the mode, type, and filename. Basicly TREES represent FOLDER STRUCTURE where each folder inside another folder is just another TREE inside a TREE. Tree contains the name of files and hashes of the files.

git cat-file -p main^{tree} - this syntax specifies the tree object that is pointed to by the tip of our main (or master) branch.

COMMITS OBJECTS combine a tree object along with information about the context that led to the current tree. Commits store a reference to parent commit(s), the author, the commiter and commit message. Wehn we run git commit, Git creates a new commit object whose parent is the current HEAD commit and whose tree is the current content of the index. Every commit includes a reference to the parent, unless its the first commit and then the tree that will contain a lot of references to other trees and to blobs. Blob contain file content. Everything gets hashed. If a single character is changed, that blob hash is changed. 
*/
