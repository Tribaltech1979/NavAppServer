var express = require('express');
var router = express.Router();

//mysql connect	
var mysql = require( 'mysql' );
var connection = mysql.createConnection({
	host :'localhost',
	user : 'dev',
	password : 'dev',
	database : 'prova'
	}

);
	
	
  connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }}
  );	
	
	
var stquery;
/* GET home page. */
router.get('/', function(req, res) {

console.log('connesso ' + connection.threadId);

  stquery = "select * from prova1";
  
  connection.query( stquery, function(err, results){
  	if (err){
  		throw err;
  	}else{
  		var users = results;
  		console.log('rendering');
  		res.render('index', {users:users});
  	}
  });
  //connection.end();
});

module.exports = router;
