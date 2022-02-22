const express = require("express");
const bodyParser = require("body-parser");
const qrImage = require("qr-image");
const fs = require("fs");

const app = express();

app.get("/", (request, response) => {
   response.send({message: "Hello world!"});
});

app.get('/qr', (request, response) => {

    let codeUrl = request.query.url;

    if(codeUrl === undefined || codeUrl.length > 20) {
        response.status(400);
        response.send({ error: "URL is missed, or too long." });
        return;
    }
    

});

app.listen(5000, () => {
    console.log("EXPRESS: Server started.") ;
});