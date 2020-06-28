test -f ./color.txt && rm color.txt

for i in {1..3}
do
    timeout 5s  ./every-5-sec.sh 40.113.228.29 >> color.txt
done
node rttParse.js