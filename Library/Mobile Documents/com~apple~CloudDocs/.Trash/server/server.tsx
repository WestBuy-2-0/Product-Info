const express = require ('express');
let app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');
const cors = require('cors');

let trending = require('./routes/trending.tsx');

app.use(cors());
app.use(express.json());

app.use('/trending', trending);

app.use((req, res, next) => {
    let error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});