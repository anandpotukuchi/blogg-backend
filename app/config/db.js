const mongoose = require('mongoose');
const vars = require('./vars')

const mongoUri = `mongodb://${vars.mongoUser}:${vars.mongoPass}@${vars.mongoHost}:${vars.mongoPort}/${vars.mongoDb}`;

//console.log(mongoUri)

mongoose.connect(mongoUri   )
  .then(() => {
    console.log('db connected');
  })
  .catch((error) => {
    console.error('Error connecting to db:', error);
  });