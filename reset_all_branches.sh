#!/bin/bash

git fetch --all

branches=$(git branch | sed 's/[* ]//')

while read branch; do
  echo "Сбрасываем ветку $branch к origin/$branch"
  git checkout $branch
  git reset --hard origin/$branch || echo "Нет ветки origin/$branch"
done <<< "$branches"
