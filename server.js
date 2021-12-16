var express = require('express')
var serveStatic = require('serve-static')

var port = process.env.PORT || 5000

var app = express()
app.use(serveStatic(__dirname + '/dist'))

app.listen(port, function() {
  console.log('Server started on port:', port)
})
