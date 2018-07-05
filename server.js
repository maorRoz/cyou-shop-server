const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; 
const routerStore = require('./storeRoute');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.use('/',routerStore);

app.listen(port, () => console.log('listening on port '+port+'!'));