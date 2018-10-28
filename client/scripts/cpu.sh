#!/bin/bash

# Name 
nameOfMachine=""

# url
url=""

# values
myTimeStamp=$(date +"%Y-%m-%dT%H:%M:%S")
jsonTemplate='{ "type":"%s", "value":"%s", "dateOfOccurance":"%s", "nameOfMachine":"%s" }'

cpu="$(grep 'cpu ' /proc/stat | awk '{usage=($2+$4)*100/($2+$4+$5)} END {print usage "%"}')"
cpuData=$(printf "$jsonTemplate" "CPU" "$cpu" "$myTimeStamp" "$nameOfMachine")
curl --request POST \
     --header "Content-Type: application/json" \
     --data "$cpuData" \
     $url
