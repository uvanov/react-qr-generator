const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const qrImage = require("qr-image");
const fs = require("fs");

const app = express();

app.use(cors());

app.get("/", (request, response) => {
   response.send({message: "Hello world!"});
});
app.get('/qr', (request, response) => {

    console.log(`Got request.`);

    const codeUrl = request.query.url;

    if(codeUrl === undefined || codeUrl.length > 20) {
        response.status(400);
        response.send({ error: "URL is missed, or too long." });
        return;
    }

    let qrCode = qrImage.image(codeUrl, { type: 'svg', size: 6 });

    // qrCode.pipe(require('fs').createWriteStream('results/i_love_qr.svg'));
    // If i need to store images

    response.setHeader("Content-type", "image/svg");
    qrCode.pipe(response);
});

app.listen(5000, () => {
    console.log("EXPRESS: Server started.") ;
});