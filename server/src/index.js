"use strict";
const express = require('express');
const app = express();
const port = 3030;
app.get('/', (req, res) => {
  res.sendStatus(200);
});
app.listen(port, () => {
  console.log(`Server listening to Port ${port}`);
});
