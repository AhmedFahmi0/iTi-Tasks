#!/bin/bash
####script to be executed every 1 min to monitor system load, and add it to file /var/log/system-load. The script must be run using root.
#Exit codes
#	0 : normal termination
#       1 : script not running by root

[ $(/usr/bin/id -u) -ne 0 ] && exit 1
FLAG=true
while [ FLAG ]
do
[ $(uptime >> /var/log/system-load) ]
sleep 1m

done

exit 0

