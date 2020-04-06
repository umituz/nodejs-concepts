const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://umituz:umituz123456@ds247171.mlab.com:47171/nodejs-restful-api',{ useCreateIndex: true,
  useNewUrlParser: true });
  mongoose.connection.on('open', () => {
    // console.log("MongoDB : Connected successfully");
  });
  mongoose.connection.on('error', (err) => {
    console.log("MongoDB : Error : ", err);
  });
  mongoose.Promise = global.Promise;
}
