const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const urlDB = 'mongodb://andory:maor2306@cluster0-shard-00-00-llbs8.mongodb.net:27017/ShopDB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&serverSelectionTryOnce=false&serverSelectionTimeoutMS=15000';
let isConnected;

module.exports = connectToDatabase = () => {
    if (isConnected) {
      console.log('=> using existing database connection');
      return Promise.resolve();
    }
  
    console.log('=> using new database connection');
    return mongoose.connect(urlDB,{auth:{authdb:"admin"},useNewUrlParser: true})
      .then(db => { 
        isConnected = db.connections[0].readyState;
      });
};