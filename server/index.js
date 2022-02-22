const express = require("express");
const bodyParser = require("body-parser");
const qrImage = require("qr-image");
const fs = require("fs");

const app = express();

app.get("/", (request, response) => {
   response.send({message: "Hello world!"});
});

app.listen(5000, () => {
    console.log("EXPRESS: Server started.") ;
});