#!/bin/bash

pull_changes() {
    git pull origin main
}

commit_changes_interactive() {
    git add .
    read -p "Enter your commit message: " message
    git commit -m "$message"
}

push_changes() {
    git push origin main
}

# Call the functions to automate your workflow
pull_changes
commit_changes_interactive
push_changes

