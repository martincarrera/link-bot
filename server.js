var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type, Authorization, x-access-token');
    res.setHeader('response_type', 'in_channel')
    next();
  });

var port = process.env.PORT || 8080;        // set our port
var router = express.Router();              // get an instance of the express Router

router.get('/', function(req, res) {
  console.log('********************--------------------********************');
  console.log('I found a GET');
  console.log(req.body);
  console.log('********************--------------------********************');
  res.json({ message: 'Welcome to the fucking api' });  
});

router.post('/', function(req, res) {
  console.log('********************--------------------********************');
  console.log('I found a POST');
  console.log(req.body.text);
  console.log('********************--------------------********************');
  res.json({  message: 'The link' + req.body.text + ' was added successfully'});
});

app.use('/api', router);

app.listen(port);