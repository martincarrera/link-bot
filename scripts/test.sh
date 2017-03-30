#!/usr/bin/env bash

# Run server tests
jest --coverage;
serverStatus=$?

if [ $serverStatus -ne 0 ]; then
 echo "Error Server Test failed.";
fi
exit $serverStatus;
