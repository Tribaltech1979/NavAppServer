var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

//mysql connect	
	db.connect(function(error) {
if ( error ) return console.log("Failed to connect");
this.query()
.select(['nome', 'testo'])
.from('prova1')
.execute(function(error, rows, columns) {
if ( error ) {
console.log("Error on query");
} else {
//console.log(rows);
res.render('index', { users : rows });
}
});
});
	
  
});

module.exports = router;
