var express = require('express');
var app = express();
var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT;
var server_ip_address = process.env.IP || process.env.OPENSHIFT_NODEJS_IP;
app.get('/', function (req, res){
 res.send('Hello World!');
} );
var server = app.listen(server_port, server_ip_address, function(){
 var host = server.address().address;
 var port = server.address().port;
 console.log('Listening at http://%s:%s', host, port);
});
module.exports = app ;
