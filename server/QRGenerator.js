const qr = require("qr-image");
const filesystem = require("fs");
const path = require("path");

class QRGenerator {

    constructor() {
        this.format = "svg";
    }

    GenerateFilename() {
        return (Math.random() + 1 + Date.now()).toString(36);
    }

    SaveFile(QRCode) {
        const fileName = this.GenerateFilename();
        const filePath = path.resolve("results", `${fileName}.${this.format}`);

        QRCode.pipe(filesystem.createWriteStream(filePath));
        return filePath;
    }

    CreateCode(linkToUrl, codeSize = 5) {
        const code = qr.image(linkToUrl, {type: this.format, size: codeSize});
        return this.SaveFile(code);
    }


}

module.exports = QRGenerator;