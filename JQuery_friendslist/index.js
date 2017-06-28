
//this stuff is way deeper than it looks, 
// tags of interest: 'express', 'http', 

var express = require('express');
var app     = express();
var http    = require('http').Server(app);

app.use(express.static(__dirname + '/public')); //static means its really not going to change

app.get('/',function(req, res){ //finds the HTML file
	res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.PORT || 3000 , function(){
	console.log('listening on *: 3000')
});

