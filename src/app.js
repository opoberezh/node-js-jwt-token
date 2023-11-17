import express from 'express';
import { port } from './config/index.js';
import loader from './loaders/index.js';
import createHashPassword from './utils/helpers/hash-password.js'

const app = express();
 createHashPassword("123456");
loader(app);

app.listen(port, err => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`);
});

export default app