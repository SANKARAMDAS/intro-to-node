const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get('/bmiCalculator', function (req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
    // console.log(__dirname);
});

app.post('/bmiCalculator', function (req, res){
    var num1 = parseFloat(req.body.n1);

    var num2 = parseFloat(req.body.n2);

    var result = n1 / (n2 + n2);
    res.send(result);
})
app.listen(8080, function (){
    console.log('Server Setup')
})