const express = require('express');
const router = express.Router();

router.post('/store',function(req,res){
    console.log('got post and...');
    console.log(req.body);
    res.sendStatus(200);
});

module.exports = router;