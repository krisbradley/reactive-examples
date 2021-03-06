let bodyParser = require('body-parser'),
    express = require('express'),
    app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('site'));
app.listen(9090, err => {
    if (err) {
        console.error(err);
        return
    }
    console.log('navigate to http://localhost:9090')
});
