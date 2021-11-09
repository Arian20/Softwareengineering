let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
 res.send('Hello World');
})
let server = app.listen(8080, function () {
 var host = server.address().address
 var port = server.address().port
 console.log("Webserver running at http://%s:%s", host,
port)
})
app.get('/api/v1/users/:userId', (req, res) => {
 let user = { vorname : "Anne",
 nachname : "Musterfrau",
 userid : `${req.params.userId}` }
 return res.send(user);
});
