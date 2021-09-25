/*jshint esversion: 6 */

function apiKey(request, response, next) {
    const api_key = '1234567';
    const user_apikey = request.query.api_key;
    console.log('<========== URL : ' + request.url + ' ==========>');
    console.log('<========== Http Method : ' + request.method + ' ==========>');
    console.log('<========== Status : ' + request.status + ' ==========>');
    if(user_apikey && (user_apikey === api_key)) {
        next(); 
    } else {
        response.json({
            "message": "Bad Request",
            "error_code": "400",
            "description": "User Authentication Failed!!!"
        });
    }
    console.log(request.query);
    next();
}

module.exports = apiKey;