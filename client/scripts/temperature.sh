#!/bin/bash

# Name 
nameOfMachine=""

# url
url=""

# values
myTimeStamp=$(date +"%Y-%m-%dT%H:%M:%S")
jsonTemplate='{ "type":"%s", "value":"%s", "dateOfOccurance":"%s", "nameOfMachine":"%s" }'

$cpuTempC
$cpuTempF
$gpuTempC
$gpuTempF
if [[ -f "/sys/class/thermal/thermal_zone0/temp" ]]; then
    cpuTempC=$(($(cat /sys/class/thermal/thermal_zone0/temp)/1000)) && cpuTempF=$((cpuTempC*9/5+32))
fi
if [[ -f "/opt/vc/bin/vcgencmd" ]]; then
    if gpuTempC=$(/opt/vc/bin/vcgencmd measure_temp); then
        gpuTempC=${gpuTempC:5:2}
        gpuTempF=$((gpuTempC*9/5+32))
    else
        gpuTempC=""
    fi
fi

# CPU 
tempCPUValues="$cpuTempC°C/$cpuTempF°F"
tempValuesData=$(printf "$jsonTemplate" "CPU Temperature" "$tempCPUValues" "$myTimeStamp" "$nameOfMachine")
curl --request POST \
     --header "Content-Type: application/json" \
     --data "$tempValuesData" \
     $url

# GPU
tempGPUValues="$gpuTempC°C/$gpuTempF°F"
tempGPUValuesData=$(printf "$jsonTemplate" "GPU Temperature" "$tempGPUValues" "$myTimeStamp" "$nameOfMachine")
curl --request POST \
     --header "Content-Type: application/json" \
     --data "$tempGPUValuesData" \
     $url
