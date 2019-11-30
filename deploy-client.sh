#!/bin/bash

# Target Variables
GIT_SLUG="wtd.net.in/wtd_client"
GIT_TOKEN="8kcDJeNjwjxBHztdq1tx"
GIT_BRANCH="master"
GIT_CLONE_DIR="client"
REPO_BUILD_DIR="dist/wtd-client"

TARGET_DIR="/home/shivam/fffffff"
#------------------------------------------------------------>

# Clean and Clone
rm -rf ${GIT_CLONE_DIR}
git clone --branch=${GIT_BRANCH} https://gitlab-ci-token:${GIT_TOKEN}@gitlab.com/${GIT_SLUG}.git ${GIT_CLONE_DIR}
if [ $? != 0 ]; then exit $?; fi
ls
cd ${GIT_CLONE_DIR}
cd ${REPO_BUILD_DIR}
if [ $? != 0 ]; then exit $?; fi

# Sync with the latest
rsync -r ./* ${TARGET_DIR}/

# After syncing
#------------------------------------------------------------>
echo "Succussfully  deployed!"
exit 0
