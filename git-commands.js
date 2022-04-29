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

==========
GIT CONFIG file is for local per-repo settings configuration. We can configure name, email, colors and lots of other stuff. For more information about it visit https://git-scm.com/docs/git-config

GLOBAL GIT CONFIG - Git looks for the golab config file at either ~/.gitconfig or ~/.config/git/config and any configuration variables that we change in the file will be applied across all Git repos. We can also alter configuration variables from the command line if preferred.

ALIASES - we can easily set up Git aliases to make our Git experience a bit simpler and faster. For example, we could define an alias "git ci" instead of having to type "git commit". We could define a gustom git lg command that prints out a custom formatted commit log. In the CONFIG file we put [alias] then new line, tab and write: s = status, so now instead of git status we can use git s. To set up aliases from the command line we can use:
git config --global alias.s status
git config --global alias.cm commit -m
For examples of aliases we can visit https://github.com/GitAlias/gitalias

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

=============
REFLOGS - Git keeps a record of when the tips of branches and other references were updated in the repo. We can view and update these reference logs using the git reflog command. REFLOG = Reference Log. Git only keeps reflogs on our local activity. They are not shared with collaborators. Reflogs expire - git cleans out old entries after around 90 days - this can be configured. The git reflog command accepts subcommands show, expire, delete and exists. Show is the only commonly used variant, and it is the default subcommand.
git reflog show - will show the log of a specific reference (it defaults to HEAD). 
git reflog show main - to view the logs for the tip of the main branch

git checkout HEAD@{2} - checkout to HEAD 2 MOVES AGO, it can be just git checkouts, they are counted as move in reflog, its different than git checkout HEAD~2 which returns us two commits ago

Reflog References - we can access specific git refs name@{qualifier}. We can use this syntax to access specific ref pointers and can pass them to other commands including checkout, reset, and merge.
Timed References - every entry in the reference logs has a timestamp associated with it. We can filter reflogs entries by time/date by using time qualifiers like:
1.day.ago
3.minutes.ago
yesterday
Fri, 29 Apr 2022 17:52:37 -0800
git reflog master@{one.week.ago}
git checkout bugfix@{2.days.ago}
git diff main@{0} main@{yesterday}

REFLOGS RESCUE - We can sometimes use reflog entries to access commits that seem lost and are not appearing in git log. If we make a commit, then do a git reset --hard and delete that or some other commits, but then realize that we want to return to them we can find their hashes by running:
git reflog show master
then we can run command 
git reset --hard <commit-hash> and it will put HEAD at that commit hash, commits that were gone will be returned
*/
