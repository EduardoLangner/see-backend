var wrk = require('wrk');
 
var conns = 100;
var results = [];
 
function benchmark() {
  if (conns === 100) {
    return console.log(results);
  }
  conns++;
  wrk({
    threads: 1,
    connections: conns,
    duration: '10s',
    printLatency: true,
    headers: { cookie: 'JSESSIONID=abcd' },
    url: 'http://localhost:3000/'
  }, function(err, out) {
     results.push(out);
     benchmark();
  });
}
benchmark();