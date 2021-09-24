/*jshint esversion: 6 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('PORT : ' || process.env.PORT);
    console.log(`Listening on Port : ${PORT}`);
});

app.get('/', (request, response) => {
    response.send('Hello!!!');
});
