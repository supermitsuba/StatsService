#!/bin/bash

# Name 
nameOfMachine=""

# url
url=""

# values
myTimeStamp=$(date +"%Y-%m-%dT%H:%M:%S")
jsonTemplate='{ "type":"%s", "value":"%s", "dateOfOccurance":"%s", "nameOfMachine":"%s" }'

disk="$( df -a --total | tail -1 | awk '{print $3}' )"
diskData=$(printf "$jsonTemplate" "disk_used" "$disk" "$myTimeStamp" "$nameOfMachine")
curl --request POST \
     --header "Content-Type: application/json" \
     --data "$ipAddrData" \
$url

disk="$( df -a --total | tail -1 | awk '{print $4}' )"
diskData=$(printf "$jsonTemplate" "disk_available" "$disk" "$myTimeStamp" "$nameOfMachine")
curl --request POST \
     --header "Content-Type: application/json" \
     --data "$ipAddrData" \
$url
