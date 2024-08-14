import mongoose from 'mongoose'
import { mongoUser, mongoPass, mongoHost, mongoDb, mongoPort } from './vars.js'

const mongoUri = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}/${mongoDb}`;

//console.log("mongo URL: ", mongoUri)

mongoose.connect(mongoUri   )
  .then(() => {
    console.log('db connected');
  })
  .catch((error) => {
    console.error('Error connecting to db:', error);
  });