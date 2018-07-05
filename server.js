const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; 
//const routerMessage = require('./messageRoute');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

//app.use('/',routerMessage);

app.listen(port, () => console.log('listening on port '+port+'!'));