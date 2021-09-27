/*jshint esversion: 6 */
const express = require('express');

const { dirname } = require('path');

const path = require('path');
const apiKey = require('./middlewares/apiKey');

const app = express();

const PORT = process.env.PORT || 3000;

const mainRouter = require('./routes/index');
const employeesRouter = require('./routes/employees');


app.set('view engine', 'ejs');
app.use(apiKey);

console.log('<============== View-Engine : ' + app.get('view engine') + " ==============>");
console.log('<============== Views : ' + app.get('views') + " ==============>");

app.use(express.static('public'));

app.use(employeesRouter);

app.use(mainRouter);

app.listen(PORT, () => {
    console.log('<============ PORT : ' + process.env.PORT + ' ============>');
    console.log(`<============ Listening on Port : ${PORT} ============>`);
    console.log('<============ current path : ' + path.resolve(__dirname) + " ============>");
});


