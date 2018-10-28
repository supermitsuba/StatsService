#!/bin/bash

# Name 
nameOfMachine=""

# url
url=""

# values
myTimeStamp=$(date +"%Y-%m-%dT%H:%M:%S")
jsonTemplate='{ "type":"%s", "value":"%s", "dateOfOccurance":"%s", "nameOfMachine":"%s" }'

ipAddr="$(ip route get 8.8.4.4 | head -1 | awk '{print $7}')"
ipAddrData=$(printf "$jsonTemplate" "IP" "$ipAddr" "$myTimeStamp" "$nameOfMachine")
curl --request POST \
     --header "Content-Type: application/json" \
     --data "$ipAddrData" \
     $url
