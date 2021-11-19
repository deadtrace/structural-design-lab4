const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.send("Go to /flex or /grid");
});

app.get("/flex", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "flex.html"));
});

app.get("/grid", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "grid.html"));
});

app.listen(process.env.PORT || 3000);
