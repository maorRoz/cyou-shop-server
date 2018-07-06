const mongoose = require('mongoose');
const storeDB = 'mongodb://andory:maor2306@cluster0-shard-00-00-llbs8.mongodb.net:27017/ShopDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&serverSelectionTryOnce=false&serverSelectionTimeoutMS=15000';
mongoose.connect(storeDB,{auth:{authdb:"admin"},useNewUrlParser: true});

mongoose.model('stores',new mongoose.Schema({name: String,address: String , openingHours: String , managerName: String}));
const storeModel = mongoose.model('stores');


exports.insertStore = function(postedStore){
    storeModel.create(postedStore,function(err){if(err){console.log(err)}});
}

exports.getAllStores = function(){
    return storeModel.find({},function(err,doc){
        if(err){
            console.log(err)
            return err;
        }
        else{
            console.log(doc.length);
            console.log(doc);
            return doc;
        }
    });
}