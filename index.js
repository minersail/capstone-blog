var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.sendFile("index.html", {root: __dirname + "/views/" })
})

app.get('/aboutme', function(request, response) {
  response.sendFile("aboutme.html", {root: __dirname + "/views/" })
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
