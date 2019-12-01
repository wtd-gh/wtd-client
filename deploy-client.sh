#!/bin/bash

# Target Variables
GIT_SLUG="wtd.net.in/wtd_client"
GIT_TOKEN="8kcDJeNjwjxBHztdq1tx"
GIT_BRANCH="production"
GIT_CLONE_DIR="temp_client"

TARGET_DIR="/var/www/wtd_client"
# ------------------------------------------------------------>

# Clean and Clone
echo ">>>> Cleaning previous build!"
rm -rf ${GIT_CLONE_DIR}
echo ">>>> Cloning the latest build!"
git clone --branch=${GIT_BRANCH} --depth=1 https://gitlab-ci-token:${GIT_TOKEN}@gitlab.com/${GIT_SLUG}.git ${GIT_CLONE_DIR}
if [ $? != 0 ]; then exit $?; fi
cd ${GIT_CLONE_DIR}

# Sync with the latest
echo ">>>> Synchronizing with the latest version!"
sudo rsync -r ./* ${TARGET_DIR}/ --exclude=.git

# After syncing
echo ">>>> Reloading nginx!"
sudo service nginx reload
if [ $? != 0 ]; then exit $?; fi
# ------------------------------------------------------------>
echo ">>>> Succussfully deployed!"
exit 0
