#!/bin/bash

#
# BUILD TRIGGERED BY: https://github.com/codeclou/jenkins-github-webhook-build-trigger-plugin
#

set -e

git clone https://github.com/cloukit/library-build-chain.git library-build-chain
cd library-build-chain
bash jenkins.sh
