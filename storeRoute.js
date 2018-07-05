const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const storeDB = 'mongodb://andory:maor2306@cluster0-shard-00-00-llbs8.mongodb.net:27017/ShopDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&serverSelectionTryOnce=false&serverSelectionTimeoutMS=15000';
mongoose.connect(storeDB,{auth:{authdb:"admin"},useNewUrlParser: true});
const dbConnection = mongoose.connection;


router.post('/store',function(req,res){
    console.log('got post and...');
    console.log(req.body);
    mongoose.model('shop',new mongoose.Schema({name: String}));
    let store = mongoose.model('shop');
    store.create({name: "maor shop"},function(err,name){if(err){console.log(err)}});
   // dbConnection.Shops.insert(req.body);
    res.sendStatus(200);
});

router.get('/store',function(req,res){
    console.log('got get and...');
    console.log('req body: '+JSON.stringify(req.body).length);
    res.send({name: 'Great Get Store',address: 'here4',openingHours: "11:00-21:00",managerName: "Shabi"});
});

module.exports = router;