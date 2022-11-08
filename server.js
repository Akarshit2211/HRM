const express = require('express');
const cors = require('cors');
const mongoConnect = require('./database/database').mongoConnect;
require('dotenv').config();

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

mongoConnect(() => {
    app.listen(port, (req, res) => {
        console.log(`[Node server is running on port ${port}]`)
    });
})