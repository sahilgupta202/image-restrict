var express = require('express');
var app = express();
var session = require('express-session');
var port = process.env.PORT || 5000;
var CASAuthentication = require('cas-module-demo');

app.use( session({
    secret            : 'sahilg',
    resave            : false,
    saveUninitialized : true
}));
 
var cas = new CASAuthentication({
    cas_url         : 'https://192.168.1.105/cas',
    service_url     : 'https://imagerestrict.herokuapp.com',
    cas_version : '2.0'
});

app.get( '/', cas.bounce, function ( req, res , next ) {
	next();
});

app.use(express.static(__dirname + '/../client'));

app.get( '/logout', cas.logout );

app.listen(port, function () {
  console.log('app listening on port 5000.');
});