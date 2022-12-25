const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("test"));

var messages = ["hello", "hi", "its working"];

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.get("/messages/:id", (req, res) => {
  console.log("getting message with id", req.params.id);
  res.send(messages[req.params.id]);
});

app.post("/messages", (req, res) => {
  let msg = req.body;
  console.log(msg);
  messages.push(msg.message);
  res.json(msg);
});

app.post("/register", (req, res) => {
  // register a new user
  let registerData = req.body;

  console.log(registerData);
  res.json("User has been created");
});
app.listen(port, () => console.log("app running"));
