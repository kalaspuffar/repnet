#!/bin/bash
set -e

# Auto-Deploy Pull Request

# If this isn't a pull request, abort.
if [ "${TRAVIS_EVENT_TYPE}" != "pull_request" ]; then
  echo "This only runs on pull_request events. Event was $TRAVIS_EVENT_TYPE."
  exit
fi

# If there were build failures, abort
if [ "${TRAVIS_TEST_RESULT}" = "1" ]; then
  echo "Deploy aborted, there were build/test failures."
  exit
fi

firebase deploy -m "Pipeline $CI_PIPELINE_ID, build $CI_BUILD_ID" --non-interactive --token $FIREBASE_TOKEN --project repnet-staging
npm run lh $FIREBASE_HOST
