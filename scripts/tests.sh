#!/usr/bin/env bash

# Run server tests
#RUN_UNIT=true istanbul cover _mocha src/tests/all.js && istanbul check-coverage --statement 50 --line 50 --branch 30 --function 50
#serverStatus=$?

#if [ $serverStatus -ne 0 ]; then
#  echo "Error Server Test fail.";
#fi
#exit $serverStatus;
