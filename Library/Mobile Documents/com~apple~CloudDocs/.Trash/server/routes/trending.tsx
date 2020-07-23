let express = require('express');
let router = express.Router();
let db = require('../db/index.js');

router.get(`/`, (req, res, next) => {
    db.findTrending((error, response) => {
        if (error) {
            console.log(error);
        } else {
            res.send(response);
        }
    })
})

module.exports = router;