var request = require('request');


 request({
    method: 'GET',
    uri: 'https://jsonplaceholder.typicode.com/posts/1',
  },
  function (error, response, body) {
    if (error) {
      return console.error('Request failed:', error);
    }
    console.log(body);
  });

 console.log('Last')