/*jshint esversion: 6 */
const express = require('express');

const { dirname } = require('path');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

console.log('<============== View-Engine : ' + app.get('view engine') + " ==============>");
console.log('<============== Views : ' + app.get('views') + " ==============>");

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('<============ PORT : ' + process.env.PORT + ' ============>');
    console.log(`<============ Listening on Port : ${PORT} ============>`);
    console.log('<============ current path : ' + path.resolve(__dirname) + " ============>");
});

app.get('/', (request, response) => {
    response.render('index');
});

app.get('/about', (request, response) => {
    response.render('about');
});

app.get('/download', (request, response) => {
    response.download(path.resolve(__dirname) + '/about.html');
});
