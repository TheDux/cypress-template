#!/bin/bash

set -ue

trap "echo 'Integration tests failed.' ERR"

echo "running without tags"

npm run test

npm run cucumber:report