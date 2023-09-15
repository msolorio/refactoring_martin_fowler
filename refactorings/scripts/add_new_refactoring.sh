#!/bin/bash

# example usage: ./add_new_refactoring.sh <newRefactoring>

cd ..

mkdir "$1"

touch "$1"/"$1".js
touch "$1"/"$1"2.js

cp scripts/test_template.js "test/$1.test.js"

sed -i .bak "s/REFACTORING_NAME/$1/g" "test/$1.test.js"

rm "test/$1.test.js.bak"

