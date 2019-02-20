var https = require('https');
//var options = {
//  host: 'www.google.com',
//  path: '/index.html'
//};
const sigfoxUrl = 'backend.sigfox.com';
const username = '5c6418402564325cadf1ed31';
const password = '87d59212cfe8e1fd3df22efae99c9660';

var callbackData = {
    id: '38D012'
};

var options = {
    host: sigfoxUrl,
    //port: 8080,
    path: '/api/devices/' + callbackData.id,
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
    }
};

var req = https.get(options, (res) => {
  //console.log('STATUS: ' + res.statusCode);
  //console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    console.log('BODY: ' + body);
    // ...and/or process the entire body here.
  })
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});