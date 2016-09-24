#!/bin/bash

set -o errexit -o nounset

rev=$(git rev-parse --short HEAD)

cd dist

git init
git config user.name "Andrew M."
git config user.email "me@r3nya.ru"

git remote add upstream "https://$GH_TOKEN@github.com/r3nya/evil-form-generator.git"
git fetch upstream
git reset upstream/gh-pages

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
