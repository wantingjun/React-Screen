#!/usr/bin/env sh

yarn build --base ./&&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:wantingjun/React-screen-website.git &&
git branch -M main &&
git push -u origin main -f &&
cd -;
