var express = require('express');
require('import-export');

var api_key = 'key-80d2150b8c9a42d1c7e55bfa9588b891';
var domain = 'sandbox3dbed4b2ad1542b480b5ddd00a6126a0.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var bodyParser = require('body-parser'); 
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/static',express.static(__dirname+'/public'));
app.set('view engine','ejs');


app.get('/',function(req,res){

    res.render("index");

})



//lets define the route for us to get notified when somebody leaves a message
app.post('/contacted',function(req,res){

var data = {
  from: '@portfolio <postmaster@sandbox3dbed4b2ad1542b480b5ddd00a6126a0.mailgun.org>',
  to: 'pranavnathdommata@gmail.com',
  subject: req.body.userName,
  text: req.body.userEmail+"\n\n\n @@@@@@ \n\n\n"+req.body.userMsg
};

mailgun.messages().send(data, function (error, body) {
    if(error)
    {
        res.send(error);
    }
    
res.redirect('/#/contacted');
console.log('done');

// res.writeHead(200,
//   {Location: 'localhost:3000/#/contacted'}
// );
res.end();



});

})


app.listen(80,function(){
    console.log("the server is listening at 80");
})
