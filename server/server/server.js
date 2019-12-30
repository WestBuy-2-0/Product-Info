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

app.get("/postgres_get", (req, res) => {
  var id = Math.floor(Math.random() * 10000000);
  db.p_getSingleProduct(id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data)
    }
  })
});

app.get("/mongo_get", (req, res) => {
  var id = Math.floor(Math.random() * 10000000)
  db.m_getSingleProduct(id, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.post("/postgres_post", (req, res) => {
  db.p_insertNewProduct((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
});

app.post("/mongo_post", (req, res) => {
  db.m_insertNewProduct((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
})

app.delete("/postgres_delete", (req, res) => {
  db.p_deleteProduct(Math.floor(Math.random() * 10000000), (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
});

app.delete("/mongo_delete", (req, res) => {
  var id = Math.floor(Math.random() * 10000000)
  db.m_deleteProduct(id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
})

app.put("/postgres_put", (req, res) => {
  var id = Math.floor(Math.random() * 10000000)
  db.p_updateItem(id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
})

app.put('/mongo_put', (req, res) => {
  var id = Math.floor(Math.random() * 10000000)
  db.m_updateItem(id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});