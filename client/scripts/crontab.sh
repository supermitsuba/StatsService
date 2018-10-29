* * * * * /usr/src/statsScripts/cpu.sh &
@reboot /usr/src/statsScripts/ip.sh &
@reboot /usr/src/statsScripts/linuxName.sh &
* * * * * /usr/src/statsScripts/memory.sh &
*/10 * * * * /usr/src/statsScripts/process.sh &
0 * * * * /usr/src/statsScripts/uptime.sh &
* * * * * /usr/src/statsScripts/temperature.sh
