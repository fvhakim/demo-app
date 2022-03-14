
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

var users = [
  {
    userName: "admin@fhakim-demo.com",
    employeeId: "AF-797898-AV"
  },
  {
    userName: "mark.whitesell@fhakim-demo.com",
    employeeId: "SE-32434-FT"
  }
];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



app.get("/getusers", async (request, response) => {
  //response.send(JSON.stringify(users));
  response.send(users);
});

app.get("/getmessage", async (request, response) => {
   const msg = request.query.msg;
  response.send({'Welcome to Fady Hakim Demo. Your message is': msg});
  
});

app.post("/getheaders", async (request, response) => {
  
    response.send(JSON.stringify(request.headers));

  });

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
