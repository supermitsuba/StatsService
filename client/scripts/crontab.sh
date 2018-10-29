0 * * * * /usr/src/statsScripts/cpu.sh
@reboot /usr/src/statsScripts/ip.sh
@reboot /usr/src/statsScripts/linuxName.sh
0 * * * * /usr/src/statsScripts/memory.sh
0 */10 * * * /usr/src/statsScripts/process.sh
0 0 * * * /usr/src/statsScripts/uptime.sh
0 * * * * /usr/src/statsScripts/temperature.sh
