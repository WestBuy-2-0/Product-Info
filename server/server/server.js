const express = require("express");
const bodyParser = require("body-parser");
const db = require("../db/db");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.static("../client/dist/"));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join("/Users/mfuechec/Desktop/hr/product-info/client/dist/index.html"));
})

app.get("/getSingleProduct", (req, res) => {
  let reqItem = req.body.selectedItemId;
  
  db.getSingleProduct(reqItem)
  .then(data => {
    res.send(data);
    res.end();
  })
  .catch(err => {
    res.send(err);
    res.end();
  });
});

app.post("/seedDatabase", (req, res) => {
  for (var i = 0; i < 10000000; i++) {
    db.seedDatabase()
    .then(data => {
      res.send('items inserted into database');
      res.end();
    })
    .catch(err => {
      res.send(err);
      res.end();
    })
  }
});

app.delete("/deleteItem", (req, res) => {
  db.emptyDatabase()
  .then(data => {
    res.send('DB deleted');
    res.end();
  })
  .catch(err => {
    res.send(err);
    res.end();
  })
});

app.put("/updateItem", (req, res) => {
  db.updateItem(itemInfo)
  .then(data => {
    res.send('item info updated');
    res.end();
  })
  .catch(err => {
    res.send(err);
    res.end();
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});