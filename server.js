const express = require("express");
const app = express();
const routes = require("./routing.js");

app.use("/",routes);
let port = 1948;
const server = app.listen(port, function(){
    console.log(`The server is up and running on port: ${port}`)
});
