var express = require('express');
var app = express();
var path = require('path');
app.set('port', 5315);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/Homepage.html'));
})

app.listen(app.get('port'), function(){
    console.log('Express started on http://flip3.engr.oregonstate.edu: ' + app.get('port') + '; press Ctrl-C to terminate.');
});
