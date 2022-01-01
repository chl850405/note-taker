//initialize express
const express = require("express");
// instantiate the server
const app = express();
//initialize api route 
const api = require("./routes/api-routes")
//initialize html route
const html = require("./routes/html-routes")


app.use

//starts server 
app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});
