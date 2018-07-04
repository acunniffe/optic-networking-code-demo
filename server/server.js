const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('hello', (req, res) => { //name: Hello World Endpoint
  res.send(`Hello ${req.query.firstName} ${req.query.lastName}`)
})

const server = app.listen(process.env.PORT || 8080, ()=> {
	const host = server.address().address;
	const port = server.address().port;
	console.log('Server is listening at http://%s:%s', host, port);
});
