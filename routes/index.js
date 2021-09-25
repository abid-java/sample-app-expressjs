/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const apiKeyMiddleware = require('../middlewares/apiKey');

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

router.get('/api/employees', apiKeyMiddleware, (request, response) => {
    response.json([{   
                    id: '1234',
                    name: 'Abid',
                    company: 'American Express'    
                    },
                    {   
                     id: 5678,
                     name: 'Mohammad',
                     company: 'fitch Ratings'    
                    },
                    {   
                     id: '9012',
                     name: 'Abid Mohammad',
                     company: 'AT&T'     
                    }
                  ]);
});





module.exports = router;