#!/bin/bash

# Name
nameOfMachine=""

# url
url=""

# values
myTimeStamp=$(date +"%Y-%m-%dT%H:%M:%S")
jsonTemplate='{ "type":"%s", "value":"%s", "dateOfOccurance":"%s", "nameOfMachine":"%s" }'

memFree="$(grep MemAvailable /proc/meminfo | awk {'print $2'}) kB"
memFreeData=$(printf "$jsonTemplate" "memFree" "$memFree" "$myTimeStamp" "$nameOfMachine")
curl --request POST \
     --header "Content-Type: application/json" \
     --data "$memFreeData" \
     $url

memTotal="$(grep MemTotal /proc/meminfo | awk {'print $2'}) kB"
memTotalData=$(printf "$jsonTemplate" "memTotal" "$memTotal" "$myTimeStamp" "$nameOfMachine")
curl --request POST \
     --header "Content-Type: application/json" \
     --data "$memTotalData" \
     $url
