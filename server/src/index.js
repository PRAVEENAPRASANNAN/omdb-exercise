const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const port = 5000;
// const url = process.env.MONGODB_URI;
const url = process.env.MONGODB_URL;
console.log(url);


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', err => {
    logger.info('Mongoose error', err);
});
db.once('open', async () => {
    app.use(cors());
    app.use('/',routes());
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
})


