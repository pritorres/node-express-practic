const dotenv = require('dotenv').config();
let express = require('express');
let app = express();

app.use((req, res, next) => {
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string)
    next()
})
app.use('/public', express.static(__dirname + '/public'))


app.get('/', function (req, res) {
    res.send("Hello Express")
})

app.get('/public', function (req, res) {
    const absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
})

app.get('/json', (function (req, res) {
    const mySecret = process.env.MESSAGE_STYLE;

    if (mySecret === "uppercase") {
        res.json({ "message": "Hello json".toUpperCase() });
    } else {
        res.json({ "message": "Hello json" });
    }

}))






































module.exports = app;
