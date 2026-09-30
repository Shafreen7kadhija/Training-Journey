# Git

## Introduction

Git is a version control system used to track changes in files and manage different versions of a project.

The Git training session covered the basic Git workflow, staging and committing changes, working with branches, merging changes, and managing Git history.

## 1. Git Repository

A Git repository is used to track the changes made to a project.

### Initialize a Repository

```bash
git init
```

Initializes a new Git repository in the current directory.

### Clone a Repository

```bash
git clone <repository-url>
```

Creates a local copy of an existing remote repository.

---

## 2. Stage and Snapshot

Git uses a staging area to prepare changes before creating a commit.

### Check Repository Status

```bash
git status
```

Shows the current state of the working directory and staged changes.

### Stage a File

```bash
git add <file>
```

Adds a file to the staging area.

### Stage All Changes

```bash
git add .
```

Stages all changes in the current directory.

### Unstage a File

```bash
git reset <file>
```

Removes a file from the staging area while keeping the changes in the working directory.

### Create a Commit

```bash
git commit -m "commit message"
```

Creates a snapshot of the staged changes with a commit message.

---

## 3. Branch and Merge

Branches allow work to be isolated and later integrated into another branch.

### List Branches

```bash
git branch
```

Lists the branches in the repository. The `*` indicates the currently active branch.

### Create a Branch

```bash
git branch <branch-name>
```

Creates a new branch.

### Switch to a Branch

```bash
git checkout <branch-name>
```

Switches to another branch.

### Merge a Branch

```bash
git merge <branch-name>
```

Merges the specified branch into the current branch.

---

## 4. Working with Remote Repositories

Git can be used to synchronize a local repository with a remote repository.

### Add a Remote Repository

```bash
git remote add origin <repository-url>
```

Connects the local repository to a remote repository.

### Push Changes

```bash
git push
```

Uploads local commits to the remote repository.

### Pull Changes

```bash
git pull
```

Fetches changes from the remote repository and integrates them into the current branch.

### Fetch Changes

```bash
git fetch
```

Downloads changes from the remote repository without automatically merging them.

---

## 5. Git History

Git provides commands for working with and modifying commit history.

### Rebase

```bash
git rebase <branch>
```

Applies commits from the current branch ahead of the specified branch.

### Reset

```bash
git reset --hard <commit>
```

Resets the current branch and working tree to the specified commit.

---

## 6. Learning Resources

The training session also introduced an interactive Git learning resource:

**Learn Git Branching**

https://learngitbranching.js.org/

---

## Assignments

No separate assignment was provided for the Git topic.

The session focused on learning Git concepts, commands, repository management, staging and committing changes, branching and merging, remote repositories, and Git history.