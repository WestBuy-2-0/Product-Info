const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js');
const path = require('path')
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/getAllProducts', (req, res) => {
    db.getAllProducts()
    .then((data) => {
        res.send(data);
        res.end();
    })
    .catch((err) => {
        res.send(err);
        res.end();
    })
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
