#!/bin/bash

# Name 
nameOfMachine=""

# url
url=""

# values
myTimeStamp=$(date +"%Y-%m-%dT%H:%M:%S")
jsonTemplate='{ "type":"%s", "value":"%s", "dateOfOccurance":"%s", "nameOfMachine":"%s" }'

cpu="$(mpstat 1 1 | awk '/^Average/ {print 100-$NF,"%"}')"
cpuData=$(printf "$jsonTemplate" "CPU" "$cpu" "$myTimeStamp" "$nameOfMachine")
curl --request POST \
     --header "Content-Type: application/json" \
     --data "$cpuData" \
     $url
