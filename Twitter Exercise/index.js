const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const twit = require('twit');

const app = express();

var T = new twit({
    consumer_key: 'DcY8351ZHCIv6AbTO8fikwWGr',
    consumer_secret: 'mM0ArOy75HyFq8Szad288qvpmx2j7ujxW0Czyt5HTArAuHLFt3',
    access_token: '783239438-ifSBsxGK29LXQqlSlR7j0nxfSjlEpeiMKoQYMTE1',
    access_token_secret: 'UdbBNKPV2wbzCuIvOOTU3Y1SPkA1twFsXG377xTBBLNF7',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
})

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/tweets/:search', function (req, res) {
    T.get('search/tweets', {
        q: req.params.search,
        count: 5
    }, function (err, data, response) {
        res.json(data);
    })
});

app.post('/comment/', function (req, res) {
    console.log(req.body.comment);
    T.post('statuses/update', {
        status: req.body.comment
    }, function (err, data, response) {
        res.json(data);
    });
});

app.listen(3000);