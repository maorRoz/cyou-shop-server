const express = require('express');
const router = express.Router();
const db = require('./db');


router.post('/store',function(req,res){
    console.log('executing post request...');
    const postedStore = req.body;
    db.insertStore(postedStore);
    res.sendStatus(200);
});

router.get('/store',function(req,res){
    console.log('executing get request...');
    db.getAllStores().then((data)=>res.send(data));
});

module.exports = router;