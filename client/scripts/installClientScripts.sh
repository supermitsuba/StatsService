dir="/usr/src/statsScripts"

mkdir -p $dir
wget -O $dir/cpu.sh https://raw.githubusercontent.com/supermitsuba/StatsService/master/client/scripts/cpu.sh
wget -O $dir/ip.sh https://raw.githubusercontent.com/supermitsuba/StatsService/master/client/scripts/ip.sh 
wget -O $dir/linux.sh https://raw.githubusercontent.com/supermitsuba/StatsService/master/client/scripts/linux.sh 
wget -O $dir/memory.sh https://raw.githubusercontent.com/supermitsuba/StatsService/master/client/scripts/memory.sh 
wget -O $dir/temperature.sh https://raw.githubusercontent.com/supermitsuba/StatsService/master/client/scripts/temperature.sh 
wget -O $dir/uptime.sh https://raw.githubusercontent.com/supermitsuba/StatsService/master/client/scripts/uptime.sh 
wget -O $dir/process.sh https://raw.githubusercontent.com/supermitsuba/StatsService/master/client/scripts/process.sh 
chmod +x $dir/*.sh
