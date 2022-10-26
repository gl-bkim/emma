var http = require('http');

const API_SERVER = 'us10';
const LIST_ID = '6dee275d22'
const options = {
    host: `https://${API_SERVER}.api.mailchimp.com`,
    path: `/3.0/lists/${LIST_ID}/members`,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};
const data = {
    email_address: '',
    status: 'subscribed',
}

callback = function(response) {
    var str = '';

    //another chunk of data has been received, so append it to `str`
    response.on('data', function (chunk) {
        str += chunk;
    });

    //the whole response has been received, so we just print it out here
    response.on('end', function () {
        console.log(str);
    });
}

const request = http.request(options, callback);
request.write(JSON.stringify(data));
request.end();