#!/bin/bash

# http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -euo pipefail
IFS=$'\n\t'

groupId=$1
artifactId=$2
folder=$3
repo=$4
type=$5
nexus_url=$6

# Nexus 2
#base="http://nexus.example.com/service/local/repositories/${repo}/content"
# Nexus 3
base="${nexus_url}/repository/${repo}"

groupIdUrl="${groupId//.//}"


#Get last snapshot version
version=`curl -s "${base}/${groupIdUrl}/${artifactId}/${folder}/maven-metadata.xml" | xmllint --xpath "metadata/versioning/snapshotVersions/snapshotVersion/value/text()" -`
filename="${artifactId}-${version}.${type}"

#Curl last snapshot
wget -O ${filename} "${base}/${groupIdUrl}/${artifactId}/${folder}/${artifactId}-${version}.${type}"
