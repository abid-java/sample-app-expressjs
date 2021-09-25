/*jshint esversion: 6 */
const express = require('express');

const { dirname } = require('path');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

const mainRouter = require('./routes/index');

app.set('view engine', 'ejs');

console.log('<============== View-Engine : ' + app.get('view engine') + " ==============>");
console.log('<============== Views : ' + app.get('views') + " ==============>");

app.use(express.static('public'));

app.use(mainRouter);

app.listen(PORT, () => {
    console.log('<============ PORT : ' + process.env.PORT + ' ============>');
    console.log(`<============ Listening on Port : ${PORT} ============>`);
    console.log('<============ current path : ' + path.resolve(__dirname) + " ============>");
});


