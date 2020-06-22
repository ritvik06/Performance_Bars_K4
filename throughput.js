const fs = require('fs')

let curlString
fs.readFile('./log.txt', 'utf8', function(err, contents) {
  curlString = contents.toString()
  let totalTime = curlString.match( /time_total:\s+(.*)(?:\r|\n|$)/i )
  totalTime = parseFloat(totalTime[1])

  let timeStartTransfer = curlString.match( /time_starttransfer:\s+(.*)(?:\r|\n|$)/i )
  timeStartTransfer = parseFloat(timeStartTransfer[1])

  let downloadSize = curlString.match( /size_download:\s+(.*)(?:\r|\n|$)/i )
  downloadSize = parseFloat(downloadSize[1])

  console.log('total time: '+totalTime)
  console.log('time to start transfer: '+timeStartTransfer)
  console.log('download size: '+downloadSize)
  let throughPut = (downloadSize)/(totalTime - timeStartTransfer)
  console.log('throughput is '+throughPut+' bytes per second')
});