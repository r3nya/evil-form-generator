#!/bin/bash

set -o errexit -o nounset

GH_REPO="@github.com/r3nya/evil-form-generator.git"
FULL_REPO="https://$GH_TOKEN$GH_REPO"
REV=$(git rev-parse --short HEAD)
OUT=$TRAVIS_BUILD_DIR/out

mkdir -p $OUT/static
cp $TRAVIS_BUILD_DIR/index.html $OUT
cp $TRAVIS_BUILD_DIR/dist/* $OUT/static/

cd $OUT

git init
git config user.name "Andrew M."
git config user.email "me@r3nya.ru"

git add -A .
git commit -m "rebuild pages at ${REV}"
git push -q $FULL_REPO master:gh-pages
