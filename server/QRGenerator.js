const qr = require("qr-image");
const filesystem = require("fs");
const path = require("path");

class QRGenerator {

    constructor() {
        this.format = "svg";
    }

    GenerateFilename(){
        return ( Math.random() + 1 + Date.now() ).toString(36);
    }

    SaveFile(QRCode){
        const fileName = this.GenerateFilename();
        const filePath = path.join(__dirname, "results", `${fileName}.${this.format}`);

        QRCode.pipe( filesystem.createWriteStream(filePath) );
        return filePath;
    }

   CreateCode( linkToUrl, codeSize ){
        const code = qr.image(linkToUrl, {size: codeSize});
        return this.SaveFile(code);
   }


}

export default new QRGenerator();