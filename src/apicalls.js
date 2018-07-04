const req = require('request')

const request = req.defaults({baseUrl: 'http://localhost:8080'})

request.get({ uri: 'hello', qs: { firstName: firstName, lastName: lastName }, headers: {} }, function (err, response, body) {  //source: Hello World Endpoint -> optic:requestjs/requestFromRoute {}
  console.log(response)
})
