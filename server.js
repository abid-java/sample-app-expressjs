/*jshint esversion: 6 */
const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('<============================ PORT : ' + process.env.PORT + ' ============================>');
    console.log(`<============================ Listening on Port : ${PORT} ============================>`);
    console.log('<============================ current path : ' + path.resolve(__dirname) + " ============================>");
});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname) + '/index.html');
});
