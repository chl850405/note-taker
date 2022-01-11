//initialize express
const express = require("express");
//initialize api route
const apiRoutes = require("./routes/api-routes");
//initialize html route
const htmlRoutes = require("./routes/html-routes");

// inialize the server
const app = express();
//set portal
const PORT = process.env.PORT || 3001;

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//set up static
app.use(express.static("public"));

//api middleware
app.use("/", apiRoutes);
app.use("/", htmlRoutes);

//starts server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
