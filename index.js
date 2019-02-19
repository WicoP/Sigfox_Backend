const express = require('express');
const qs = require('querystring');
const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

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
});

app.listen(port, () => console.log(`Listening on port ${port}...`));