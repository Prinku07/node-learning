//for recgnise env variables
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' }); //
const app = require('./app');

//console.log(app.get('env')); console.log(process.env);

console.log(process.env.PORT);
console.log(process.env.NODE_ENV);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app runnig on port ${port}...`);
});
