const qr = require("qr-image");

class QRGenerator {

    #GenerateFilename(){
        return ( Math.random() + 1 + Date.now() ).toString(36);
    }

    #saveFile(){

    }

   createCode( linkToUrl ){

   }


}

export default new QRGenerator();