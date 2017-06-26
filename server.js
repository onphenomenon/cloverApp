let express = require('express');
let https = require('https');
let path = require('path');

let app = express()
app.use(express.static('CLOVER-APP/dist'));

app.use((request, response, next) => {  
  console.log(request.headers);
  next();
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use((err, request, response, next) => {  
  console.log(err);
  response.status(500).send('Server Error');
});


app.listen(3000, function () {
  console.log('Challenge App listening on port 3000');
});
