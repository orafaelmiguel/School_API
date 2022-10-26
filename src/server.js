const express = require('express');
const router = require('./Routes/routes');
require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(router);
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
