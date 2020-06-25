#!/bin/sh

i=1;

while true
do
 ./curltime.sh $1 > log.txt
 sleep 3
echo "Ping $i"
 ./run
 sleep 2

 #TODO
# if [ `echo "$i % 3" | bc` -eq 0 ]
# then
# fi  

 i=$((i+1));

done
