import mongoose from 'mongoose';

require('dotenv').config({ path: __dirname + '/../.env' });

// import config from './dbConfig';
const connectionUrl = process.env.MONGO_URI || '';

const connectionOptions = {
  useCreateIndex: true,
  user: 'kushal',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  pass: 'kushal',
  dbName: 'graphqltest'
};

mongoose.connect(connectionUrl, connectionOptions);

const { connection: db } = mongoose;

db.on('connected', () => {
  console.log(`Connection to mongoDB successful`);
});

db.on('error', error => {
  console.log(`db error: ${error}`);
  console.log(error);
});

db.on('disconnected', () => {
  console.log(`db disconnect...`);
  console.log('MongoDB disconnected');
});

export default db;
