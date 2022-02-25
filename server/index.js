const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const QRGenerator = require("./QRGenerator");
const qrGenerator = new QRGenerator();


const app = express();

app.use(cors());

app.get("/", (request, response) => {
   response.send({message: "Hello world!"});
});

app.get('/qr', (request, response) => {


    const codeUrl = request.query.url;

    if(codeUrl === undefined || codeUrl.length > 20) {
        response.status(400);
        response.send({ error: "URL is missed, or too long." });
        return;
    }


    const pathToCode = qrGenerator.CreateCode(codeUrl, 6);

    response.send({path: pathToCode});
    response.end();
});

app.listen(5000, () => {
    console.log("EXPRESS: Server started.") ;
});