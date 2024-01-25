'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Nodejs application running on aws ec2');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:8080`);
});
