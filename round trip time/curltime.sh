#!/bin/bash

curl -w @- -o /dev/null -s "$@" <<'EOF'
   time_total:  %{time_total}\n

   time_namelookup:  %{time_namelookup}\n
   time_connect:  %{time_connect}\n
   time_appconnect:  %{time_appconnect}\n
   time_pretransfer:  %{time_pretransfer}\n
   time_redirect:  %{time_redirect}\n
   time_starttransfer:  %{time_starttransfer}\n
   size_download: %{size_download}\n
   size_request: %{size_request}\n
                    ----------\n

EOF
