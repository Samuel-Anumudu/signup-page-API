const express = require("express");

const bodyParser = require("body-parser");

const request = require("request");

// initialize a new express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;

  console.log(firstName, lastName, email);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, (req, res) => {
  console.log("Serving running on port 3000");
});

// API Key
// f5cbef482753b09b4e8537fcd7f5d13f-us5
