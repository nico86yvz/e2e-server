var express = require('express');
var app = express();
var PORT = 3000;


var middleware = {
  requireAuth: function(req, res, next) {
      console.log('private route hit');
      next();
  },
  logger: function(req, res, next) {

      console.log(new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
      next();
  }
};

app.use(middleware.logger);

app.get('/mal', function(req, res){
    res.send('malmisin oglum!!');
});

app.use(express.static(__dirname + '/public/views'));

app.listen(PORT, function() {
console.log('express server is running: ' + PORT);
});