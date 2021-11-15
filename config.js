require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.NODE_ENV === 'development' ? 
  process.env.mongodbtest : process.env.mongodbtest;

module.exports = {
  PORT,
  MONGODB_URI
};