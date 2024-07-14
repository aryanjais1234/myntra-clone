const express = require('express');
const bodyParser = require('body-parser');

const { getStoredItems, storeItems } = require('./data/items');

const Routes = require("./routes/storeRoutes.js");

const app = express();

app.use(bodyParser.json());

app.use("/", Routes);

app.listen(8000);
