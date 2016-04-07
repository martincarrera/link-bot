#!/usr/bin/env bash
#TARGET_ENV=${1:-"dev"};

#CF_SPACE="${CF_SPACE_DEV}";
#CF_ROUTE=" --random-route";

#if [ $TARGET_ENV == "prod" ]; then
#  CF_SPACE="${CF_SPACE_PROD}";
#  CF_ROUTE="";
#fi

#echo "Deploying to '$TARGET_ENV' with CF.";
#echo "Space: $CF_SPACE, Route: $CF_ROUTE."

#cf api "${CF_API}";
#cf auth "${CF_USER}" "${CF_PASSWORD}";
#cf target -o "${CF_ORG}" -s "${CF_SPACE}";
#cf push $CF_ROUTE;


#########################################################

heroku login
$HEROKU_USER
$HEROKU_PASS
git push heroku master
heroku ps
