//for recgnise env variables
const dotenv = require('dotenv');

const mongoose = require('mongoose');
dotenv.config({ path: './config.env' }); //
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

//console.log(app.get('env')); console.log(process.env);

// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log('DB Connection Successful'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app runnig on port ${port}...`);
});
