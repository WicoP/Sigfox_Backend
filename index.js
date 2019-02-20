
const express = require('express');
const qs = require('querystring');
const bodyParser = require('body-parser');

const sigfoxUrl = 'https://backend.sigfox.com';
const username = '5c6418402564325cadf1ed31';
const password = '87d59212cfe8e1fd3df22efae99c9660';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

function getMeterNumber(){
    console.log(sigfoxUrl);
    const https = require('https');

    var options = {
        host: sigfoxUrl,
        port: 8080,
        path: '/api/devices/' + callbackData.id,
        method: 'GET',
        //headers: {
        //    'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
        //}
    };
    
    /*
    request = https.get(options, function(res){
        var body = "";
        res.on('data', function(data) {
           body += data;
        });
        res.on('end', function() {
         //here we have the full response, html or json object
           console.log(body);
        });
        res.on('error', function(e) {
           console.log("Got error: " + e.message);
        });
    });
    */
}

//function getMeterNumber(){
//    console.log('Get the Meter number from Sigfox using the device ID.')
//};




app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/callback', (req, res) => {
    const callback = {
        name: req.body.name,
        data: req.body.data
    };
    const callbackData = {
        sigfoxData: callback.data.sigfoxData,
        id: callback.data.id,
    };
    res.send(`Callback Name: ${callback.name}, SigfoxID: ${callbackData.id}, SigfoxData: ${callbackData.sigfoxData}.`);
    console.log(`Name: ${callback.name}`);
    console.log(`ID: ${callbackData.id}`);
    console.log(`SigfoxData: ${callbackData.sigfoxData}`);
    getMeterNumber();
});





app.listen(port, () => console.log(`Listening on port ${port}...`));