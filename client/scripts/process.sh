#!/bin/bash

# Name 
nameOfMachine=""

# url
url=""

# values
myTimeStamp=$(date +"%Y-%m-%dT%H:%M:%S")
jsonTemplate='{ "type":"%s", "value":"%s", "dateOfOccurance":"%s", "nameOfMachine":"%s" }'

processNumber="$(ps ax | wc -l | tr -d " ")"
processData=$(printf "$jsonTemplate" "Number of Processes" "$processNumber" "$myTimeStamp" "$nameOfMachine")
curl --request POST \
     --header "Content-Type: application/json" \
     --data "$processData" \
     $url
