/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index', {
        title: 'Index Page'
    });
}); 

router.get('/about', (request, response) => {
    response.render('about',{
        title: 'About Page'
    });
});

router.get('/download', (request, response) => {
    response.download(path.resolve(__dirname) + '/about.html');
});





module.exports = router;