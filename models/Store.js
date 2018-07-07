const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
        name: String,
        address: String ,
        openingHours: String , 
        managerName: String
    });

const storeModel = mongoose.model('Store', StoreSchema);

exports.insertStore = function(postedStore){
    console.log('trying to create store: '+JSON.stringify(postedStore));
    return storeModel.create(postedStore);
}

exports.getAllStores = function(){
    return storeModel.find({},function(err,doc){
        if(err){
            console.log('err retrieving all the stores : '+err);
            return err;
        }
        else{
            return doc;
        }
    });
}

exports.deleteStore = function(id){
    console.log('trying to delete store with id: '+id);
    return storeModel.findByIdAndRemove(id);
}

exports.updateStore = function(id,newStore){
    console.log('trying to update store with id: '+id);
    console.log('new store entry :'+ JSON.stringify(newStore));
    return storeModel.findByIdAndUpdate(id,newStore,{new: true});
}