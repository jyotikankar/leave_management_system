const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "mgm",
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ Connected to MySQL");
});

// Sample route
app.post("/add-faculty", (req, res) => {
  const { name, email } = req.body;
  const sql = "INSERT INTO faculty (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Faculty added!");
  });
});

app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});
