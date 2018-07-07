const connectToDatabase = require('./db');
const store = require('./models/Store');


exports.getStore = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
  .then(() => 
    store.getAllStores()
    .then(stores =>
      callback(null,{
        statusCode: 200,
        body: JSON.stringify(stores) 
      })))
    .catch(err => 
      callback(null,{
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not fetch the stores.'
      }))
};

exports.createStore = (events,context,callback) =>{
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
  .then(() =>{
      const postedStore = events.body;
      store.createStore(postedStore)
      .then(store =>  
        callback(null,{
          statusCode: 200,
          body: JSON.stringify(store)    
        }))
    })
    .catch(err => 
      callback(null,{
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not create the store'
      }))

}
