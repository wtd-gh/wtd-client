#!/bin/bash

# Target Variables
GIT_SLUG="wtd.net.in/wtd_client"
GIT_TOKEN="8kcDJeNjwjxBHztdq1tx"
GIT_BRANCH="production"
GIT_CLONE_DIR="temp_client"

TARGET_DIR="/home/shivam/fffffff"
# ------------------------------------------------------------>

# Clean and Clone
rm -rf ${GIT_CLONE_DIR}
git clone --branch=${GIT_BRANCH} https://gitlab-ci-token:${GIT_TOKEN}@gitlab.com/${GIT_SLUG}.git ${GIT_CLONE_DIR}
if [ $? != 0 ]; then exit $?; fi
cd ${GIT_CLONE_DIR}

# Sync with the latest
rsync -r ./* ${TARGET_DIR}/ --except .git

# After syncing
sudo systemctl restart wtd_client.service
if [ $? != 0 ]; then exit $?; fi
# ------------------------------------------------------------>
echo "Succussfully deployed!"
exit 0
