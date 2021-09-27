/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();

router.get('/employees', (request, response) => {
    response.render('employees',{
        title: 'Employees'
    });
});

module.exports = router;