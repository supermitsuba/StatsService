#!/bin/bash

# Name 
nameOfMachine=""

# url
url=""

# values
myTimeStamp=$(date +"%Y-%m-%dT%H:%M:%S")
jsonTemplate='{ "type":"%s", "value":"%s", "dateOfOccurance":"%s", "nameOfMachine":"%s" }'

# UPTIME
upSeconds="$(/usr/bin/cut -d. -f1 /proc/uptime)"
secs="$((upSeconds%60))"
mins="$((upSeconds/60%60))"
hours="$((upSeconds/3600%24))"
days="$((upSeconds/86400))"
UPTIME="$(printf "%d days, %02dh%02dm%02ds" "$days" "$hours" "$mins" "$secs")"

uptimeData=$(printf "$jsonTemplate" "uptime" "$UPTIME" "$myTimeStamp" "$nameOfMachine")
echo "$uptimeData"
curl --request POST \
     --header "Content-Type: application/json" \
     --data "$uptimeData" \
     $url
