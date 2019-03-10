*/2 * * * * /usr/src/statsScripts/cpu.sh &
1 1 * * * /usr/src/statsScripts/ip.sh &
1 1 * * * /usr/src/statsScripts/linuxName.sh &
*/2 * * * * /usr/src/statsScripts/disk.sh &
*/2 * * * * /usr/src/statsScripts/memory.sh &
*/10 * * * * /usr/src/statsScripts/process.sh &
1 * * * * /usr/src/statsScripts/uptime.sh &
@reboot /usr/src/statsScripts/ip.sh &
@reboot /usr/src/statsScripts/linux.sh &
