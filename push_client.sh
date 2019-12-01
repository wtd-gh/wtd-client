#!/bin/bash
GIT_SLUG="wtd.net.in/wtd_client"
GIT_TOKEN=${GL_ACCESS_TOKEN}
GIT_BRANCH="production"
GIT_CLONE_DIR="client_prod"
REPO_BUILD_DIR="dist/wtd-client"
# ------------------------------------------------------------

# Clone and Copy
rm -rf ${GIT_CLONE_DIR}
git clone --branch=${GIT_BRANCH} https://gitlab-ci-token:${GIT_TOKEN}@gitlab.com/${GIT_SLUG}.git ${GIT_CLONE_DIR}
if [ $? != 0 ]; then exit $?; fi
ls -alh
BASE_DIR=${PWD}
cd ${GIT_CLONE_DIR}
find . -maxdepth 1 ! \( -name . -o -name .. -o -name .git \) -exec rm -rf {} \;
cd ${BASE_DIR}
cp -rf ./${REPO_BUILD_DIR}/* ./${GIT_CLONE_DIR}/
cd ${GIT_CLONE_DIR}
ls -alh


# Commit and Push
git add -A
git commit -m "Build Id: "${CI_JOB_ID}
git push origin ${GIT_BRANCH}
if [ $? != 0 ]; then exit $?; fi
exit 0
