const fs = require('fs')

let iperfString
fs.readFile('./log.txt', 'utf8', function(err, contents) {
  iperfString = contents.toString()
  let bitrateList = iperfString.match( /\w+(?= +Kbits\b)/g )
  let bitrate = parseFloat( bitrateList[0] )
  
  let bars
  if(bitrate >= 512){
    bars = 5
  }
  else if(bitrate >= 408){
      bars = 4
  }
  else if(bitrate >= 306){
      bars = 3
  }
  else if(bitrate >= 204){
      bars = 2
  }
  else if(bitrate >= 102){
      bars = 1
  }
  else bars = 0
  
  if(iperfString.match(/\bJitter\b/) !== null){
      bars = bars===0 ? bars : bars - 1
  }

  console.log(bars+' bars')
});