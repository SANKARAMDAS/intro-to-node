const express = require("express");

const app = express();

app.get('/', function(req, res){
    res.send('<h1>Hello!</h1>');
});

app.get('/contact', function(req,res){
    res.send('This is Contact')
})

app.get('/about', function (req,res){
    res.send('<h1>This is about myself</h2>')
})

app.get('/reg', function (req,res){
    res.send('This is regist')
})
app.listen(8080, function(){
    console.log('Server has started port 3300');
});
