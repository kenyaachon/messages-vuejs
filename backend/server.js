const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("test"));

// var messages = ["hello", "hi", "its working"];
var messages = [{ user: "dummy user", text: "some dummy text" }];
var users = [];
const privateKey = "jgoejrgj9304i43gegjoreigaegj";

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.get("/messages/:id", (req, res) => {
  console.log("getting message with id", req.params.id);
  res.send(messages[req.params.id]);
});

app.post("/messages", (req, res) => {
  const token = req.headers.authorization;
  const userId = jwt.decode(token, privateKey);
  console.log("user list", users);
  console.log("userId", userId);
  const user = users.filter((user) => user.id === userId)[0];
  console.log(user);

  let msg = { user: user.userName, text: req.body.message };
  console.log(msg);

  messages.push(msg);
  res.json(msg);
});

app.post("/register", (req, res) => {
  // register a new user
  let registerData = req.body;
  registerData.id = uuidv4();

  users.push(registerData);
  console.log("users", users);
  console.log(registerData);

  // res.json(registerData.id);

  let token = jwt.sign(registerData.id, privateKey);
  res.json(token);
});

app.post("/login", (req, res) => {
  // login a user
  let loginData = req.body;

  const user = users.filter((user) => user.userName === loginData.userName)[0];

  console.log("users", users);
  console.log("user", user);

  if (user === undefined) {
    return res.status(401).send({ message: "name or password is invalid" });
  }
  if (user.password != loginData.password) {
    return res.status(401).send({ message: "name or password is invalid" });
  }

  let token = jwt.sign(user.id, privateKey);
  res.json(token);
});
app.listen(port, () => console.log("app running"));
