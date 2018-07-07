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

exports.createStore = (event,context,callback) =>{
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
  .then(() =>{
      const postedStore = JSON.parse(event.body);
      store.insertStore(postedStore).then(()=>
      callback(null,{
          statusCode: 200,
          headers: { 'Content-Type': 'text/plain' },
          body: 'store created successfully!'    
      }))
    })
    .catch(err => 
      callback(null,{
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Could not create the store.'
      }))

}


exports.removeStore = (event,context,callback) =>{
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
  .then(() =>{
    console.log('body given to delete :'+event.body);
    const idToRemove = JSON.parse(event.body).id;
    store.deleteStore(idToRemove).then(()=>
    callback(null,{
      statusCode: 200,
      body: event.body
    }))
  })
  .catch(err => 
    callback(null,{
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Could not delete the store.'
    }))
}
