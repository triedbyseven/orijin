const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/orijinator_lp';

mongoose.connect(url, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.once('open', err => {
  if (err) return err;

  console.log(`Connected to mongo at ${url}`);
});
