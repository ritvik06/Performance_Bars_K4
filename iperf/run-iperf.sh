iperf -c ping.online.net -p 80 -i 0.5 -t 2 -b 0.5m > ./log.txt
node parse.js
