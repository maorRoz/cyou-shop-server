const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const storeDB = 'mongodb://andory:maor2306@cluster0-shard-00-00-llbs8.mongodb.net:27017/admin?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&serverSelectionTryOnce=false&serverSelectionTimeoutMS=15000';
mongoose.connect(storeDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.post('/store',function(req,res){
    console.log('got post and...');
    console.log(req.body);
    res.sendStatus(200);
});

router.get('/store',function(req,res){
    console.log('got get and...');
    console.log('req body: '+JSON.stringify(req.body).length);
    res.send({name: 'Great Get Store',address: 'here4',openingHours: "11:00-21:00",managerName: "Shabi"});
});

module.exports = router;