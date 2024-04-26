#!/usr/bin/env bash

# exit on error
set -o errexit
./bin/render-build.sh
cd build
# Start server
ENV_PATH=/etc/secrets/.env node server.js --no-assets
