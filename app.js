
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , location = require('./routes/location')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/translate', routes.indexChinese);
app.get('/register', routes.register);
app.get('/login', routes.login);
app.get('/statistics', routes.statistics);
app.get('/twomap', routes.twomap);
app.get('/threemap', routes.threemap);
app.get('/globe', routes.globe);
app.get('/heatmap',function(req,res){
	res.render('heatmap');
});
app.get('/location',function(req,res){
	res.render('location');
});
app.post('/location',location.acceptLocation);
app.get('/getlocation',location.getLocation);

app.get('/mapUsa',function(req,res){
	res.render('mapUsa');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
