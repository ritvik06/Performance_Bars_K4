const fs = require('fs')

let rttString
fs.readFile('./color.txt', 'utf8', function(err, contents) {
  rttString = contents.toString()
  let rttList = rttString.match( / (?<=RTT :\s+)(.*)(?= ms) /g )
  let rttAverage = 0
  rttList.map( rtt => {
      rttAverage += parseFloat(rtt)
  })
  rttAverage = parseFloat(parseFloat(rttAverage/3).toFixed(3))
  if(rttAverage < 1000){
      console.log('white')
  }
  else if(rttAverage < 3000){
      console.log('yellow')
  }
  else{
      console.log('red')
  }

});