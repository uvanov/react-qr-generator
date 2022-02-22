# React QR-Code App

I developed small application for generating QR-codes. 

## Server Side

Application has own API, based on NodeJS. As a qr-library i chose [qr-image](https://github.com/alexeyten/qr-image).

The API has the following structure: 

`localhost:5000/qr/{params}`

| Parameter name | Parameter Description |
| -------------- | --------------------- |
|       url      | The URL that  QR code will link to |